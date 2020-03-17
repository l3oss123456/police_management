import {
  compose,
  withState,
  withHandlers,
  lifecycle,
  branch,
  renderComponent
} from "recompose";
import { withRouter } from "react-router-dom";
import moment from "moment";
import * as R from "ramda";
import axios from "../../../../core/libs/axios/axios";
import displayNotification from "../../../../utils/notification";
import Loading from "../../../../components/Loading/index";

export default compose(
  withRouter,
  withState("queryData", "setQueryData", {}),
  withState("isLoading", "setIsLoading", true),
  withState("editingTable", "setEditingTable", ""),
  withState("agent", "setAgent", []),
  withState("focusEditingTable", "setFocusEditingTable", false),
  withState("selectedPrefix", "setSelectedPrefix"),
  withState("birthDate", "setBirthDate", ""),
  withHandlers({
    handleAddRow: props => () => {
      props.setAgent([
        ...props.agent,
        {
          prefix: "-",
          firstName: "-",
          lastName: "-",
          birthday: "-",
          idCardNo: "-",
          houseNo: "-",
          alley: "-",
          subArea: "-",
          area: "-",
          province: "-",
          mobileNo: "-"
        }
      ]);
    },
    handleDeleteRow: props => index => {
      const dataLength = Object.keys(props.agent).length;
      if (dataLength > 1) {
        props.agent.splice(index, 1);
        props.setAgent(props.agent);
      }
    },
    handleSaveAgentTable: props => (index, columnsName, data) => {
      if (data === "") props.agent[index][columnsName] = "-";
      else props.agent[index][columnsName] = data;
    },
    editUser: props => (e, form) => {
      e.preventDefault();
      form.validateFields(async (err, values) => {
        if (!err) {
          const { selectedPrefix, agent, history, match, birthDate } = props;
          const { getFieldValue } = form;
          const id = R.path(["params", "id"], match);
          const data = {
            id: id,
            birthday: moment(birthDate).format("YYYY-MM-DD"),
            prefix: selectedPrefix,
            firstName: getFieldValue("userFirstName"),
            lastName: getFieldValue("userLastName"),
            idCardNo: getFieldValue("userIdCardNo"),
            houseNo: getFieldValue("userHouseNo"),
            alley: getFieldValue("userAlley"),
            road: getFieldValue("userRoad"),
            subArea: getFieldValue("userSubArea"),
            area: getFieldValue("userArea"),
            province: getFieldValue("userProvince"),
            mobileNo: getFieldValue("userMobileNo"),
            agent: agent
          };
          await axios("PUT", `users/${id}`, data);
          history.push("/management/user");
          displayNotification("success", "แก้ไขข้อมูลสำเร็จ");
        }
      });
    }
  }),
  lifecycle({
    async componentDidMount() {
      const {
        match,
        setQueryData,
        setAgent,
        setSelectedPrefix,
        setBirthDate
      } = this.props;
      const id = R.pathOr("", ["params", "id"], match);
      const resp = await axios("GET", `users/${id}`);
      setQueryData(R.path(["data", "data"], resp));
      setAgent(R.path(["data", "data", "agent"], resp));
      setSelectedPrefix(R.path(["data", "data", "prefix"], resp));
      setBirthDate(R.path(["data", "data", "birthday"], resp));
    }
  }),
  branch(props => {
    const { queryData } = props;
    if (props.isLoading === true && R.isEmpty(queryData)) {
      return true;
    } else {
      return false;
    }
  }, renderComponent(Loading))
);
