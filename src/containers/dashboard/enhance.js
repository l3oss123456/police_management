import {
  compose,
  withState,
  withHandlers,
  lifecycle,
  branch,
  renderComponent
} from "recompose";
import { withRouter } from "react-router-dom";
import * as R from "ramda";
import moment from "moment";
import axios from "../../core/libs/axios/axios";
import Loading from "../../components/Loading/index";

const setDatesArray = data => {
  let datesArray = [moment(data[0].createdAt).format("YYYY-MM-DD")];
  data.map(item => {
    const date = moment(item.createdAt).format("YYYY-MM-DD");
    if (!R.contains(date, datesArray)) {
      datesArray.push(date);
    }
    return null;
  });
  return datesArray;
};
const chartDataSetting = (data, dates) => {
  const chartData = dates.map(date => {
    const totalReceive = data.reduce((sum, item) => {
      const dateItem = moment(item.createdAt).format("YYYY-MM-DD");
      if (dateItem === date) {
        return sum + 1;
      }
      return sum;
    }, 0);
    const totalAgentReceive = data.reduce((sum, item) => {
      const dateItem = moment(item.createdAt).format("YYYY-MM-DD");
      if (dateItem === date && !R.isEmpty(item.agent)) {
        return sum + 1;
      }
      return sum;
    }, 0);
    const totalBySelfReceive = data.reduce((sum, item) => {
      const dateItem = moment(item.createdAt).format("YYYY-MM-DD");
      const agent = R.pathOr("", ["agent"], item);
      if (dateItem === date && agent === "") {
        return sum + 1;
      }
      return sum;
    }, 0);
    return {
      receiveDate: date,
      totalReceive: totalReceive,
      totalAgentReceive: totalAgentReceive,
      totalBySelfReceive: totalBySelfReceive
    };
  });
  return chartData;
};
const receiveTypeSetting = data => {
  const totalAgentReceive = data.reduce((sum, item) => {
    if (!R.isEmpty(item.agent)) {
      return sum + 1;
    }
    return sum;
  }, 0);
  const totalBySelfReceive = data.reduce((sum, item) => {
    const agent = R.pathOr("", ["agent"], item);
    if (agent === "") {
      return sum + 1;
    }
    return sum;
  }, 0);
  return {
    totalAgentReceive: totalAgentReceive,
    totalBySelfReceive: totalBySelfReceive
  };
};
const amountUserSetting = data => {
  const male = data.reduce((sum, item) => {
    if (item.prefix === "นาย") {
      return sum + 1;
    }
    return sum;
  }, 0);
  const female = data.reduce((sum, item) => {
    if (item.prefix === "นางสาว") {
      return sum + 1;
    }
    return sum;
  }, 0);
  return {
    male: male,
    female: female,
    total: data.length
  };
};

export default compose(
  withRouter,
  withState("chartData", "setChartData", {}),
  withState("isLoading", "setIsLoading", true),
  withState("amountUser", "setAmountUser", {}),
  withState("amountReceiveType", "setAmountReceiveType", {}),
  withHandlers({}),
  lifecycle({
    async componentDidMount() {
      const { setChartData, setAmountReceiveType, setAmountUser } = this.props;
      const resp = await axios("GET", `users-history`);
      const respData = R.path(["data", "data"], resp);
      const datesArray = setDatesArray(respData);
      setChartData(chartDataSetting(respData, datesArray));
      setAmountReceiveType(receiveTypeSetting(respData));
      setAmountUser(amountUserSetting(respData));
    },
    async componentDidUpdate(prevProps) {
      const {
        location,
        setChartData,
        setAmountReceiveType,
        setAmountUser
      } = this.props;
      const { search } = location;
      if (prevProps.location.search !== search) {
        const resp = await axios("GET", `users-history${search}`);
        const respData = R.path(["data", "data"], resp);
        let datesArray = [
          moment(resp.data.data[0].createdAt).format("YYYY-MM-DD")
        ];
        respData.map(item => {
          const date = moment(item.createdAt).format("YYYY-MM-DD");
          if (!R.contains(date, datesArray)) {
            datesArray.push(date);
          }
          return null;
        });
        setChartData(chartDataSetting(respData, datesArray));
        setAmountReceiveType(receiveTypeSetting(respData));
        setAmountUser(amountUserSetting(respData));
      }
    }
  }),
  branch(props => {
    const { chartData, amountReceiveType } = props;
    if (
      props.isLoading === true &&
      R.isEmpty(chartData) &&
      R.isEmpty(amountReceiveType)
    ) {
      return true;
    } else {
      return false;
    }
  }, renderComponent(Loading))
);
