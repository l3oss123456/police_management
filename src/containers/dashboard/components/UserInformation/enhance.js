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
import axios from "../../../../core/libs/axios/axios";
import Loading from "../../../../components/Loading/index";

const setDatesArray = data => {
  if (!R.isEmpty(data)) {
    let datesArray = [moment(data[0].createdAt).format("YYYY-MM-DD")];
    data.map(item => {
      const date = item.createdAt.split("T")[0];
      if (!R.contains(date, datesArray)) {
        datesArray.push(date);
      }
      return null;
    });
    return datesArray;
  }
};
const chartDataSetting = (data, dates) => {
  if (!R.isEmpty(data) && !R.isEmpty(dates)) {
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
        const agent = R.pathOr("", ["agent"], item);
        if (dateItem === date && agent !== "") {
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
  }
};
const receiveTypeSetting = data => {
  if (!R.isEmpty(data)) {
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
  } else {
    return { totalAgentReceive: 0, totalBySelfReceive: 0 };
  }
};
const amountUserSetting = data => {
  if (!R.isEmpty(data)) {
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
  } else {
    return {
      male: 0,
      female: 0,
      total: 0
    };
  }
};
const setQueryString = data => {
  let str = [];
  for (let key in data) {
    if (data.hasOwnProperty(key) && data[key]) {
      str.push(data[key]);
    }
  }
  return str.join("&");
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
        setChartData("");
        setAmountReceiveType("");
        setAmountUser("");
        const searchLength = search.split("&").length;
        const searchValue = search.split("&").slice(2, searchLength);
        const queryString = setQueryString(searchValue);
        const resp = await axios("GET", `users-history?${queryString}`);
        const respData = R.path(["data", "data"], resp);
        const datesArray = setDatesArray(respData);
        setChartData(chartDataSetting(respData, datesArray));
        setAmountReceiveType(receiveTypeSetting(respData));
        setAmountUser(amountUserSetting(respData));
      }
    }
  }),
  branch(props => {
    const { chartData, amountReceiveType, amountUser } = props;
    if (
      props.isLoading === true &&
      R.isEmpty(chartData) &&
      R.isEmpty(amountReceiveType) &&
      R.isEmpty(amountUser)
    ) {
      return true;
    } else {
      return false;
    }
  }, renderComponent(Loading))
);
