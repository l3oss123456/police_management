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
import axios from "../../../../core/libs/axios/axios";
import displayNotification from "../../../../utils/notification";
import Loading from "../../../../components/Loading/index";

export default compose(
  withRouter,
  withState("allPosition", "setAllPosition", []),
  withState("selectedPosition", "setSelectedPosition", ""),
  withState("allRole", "setAllRole", []),
  withState("selectedRole", "setSelectedRole", ""),
  withState("queryData", "setQueryData", {}),
  withState("isLoading", "setIsLoading", true),
  withHandlers({
    insertOfficer: props => (e, form) => {
      e.preventDefault();
      form.validateFields(async (err, values) => {
        if (!err) {
          const { selectedPosition, selectedRole, history } = props;
          const { getFieldValue } = form;
          const data = {
            username: getFieldValue("username"),
            password: getFieldValue("password"),
            firstName: getFieldValue("firstName"),
            lastName: getFieldValue("lastName"),
            position: selectedPosition,
            role: selectedRole
          };
          await axios("POST", "officers", data);
          history.push("/");
          displayNotification("success", "Create Successful");
        }
      });
    },
    editOfficer: props => (e, form) => {
      e.preventDefault();
      form.validateFields(async (err, values) => {
        if (!err) {
          const { selectedPosition, selectedRole, history } = props;
          const { getFieldValue } = form;
          const { match } = props;
          const id = R.path(["params", "id"], match);
          const data = {
            username: getFieldValue("username"),
            password: getFieldValue("password"),
            firstName: getFieldValue("firstName"),
            lastName: getFieldValue("lastName"),
            position: selectedPosition,
            role: selectedRole
          };
          await axios("PUT", `officers/${id}`, data);
          history.push("/");
          displayNotification("success", "Edit Successful");
        }
      });
    }
  }),
  lifecycle({
    async componentDidMount() {
      const {
        setAllPosition,
        setSelectedPosition,
        setAllRole,
        setSelectedRole,
        setQueryData,
        setIsLoading,
        match
      } = this.props;
      const id = R.pathOr("", ["params", "id"], match);
      const position = ["root1", "root2"];
      setAllPosition(position);
      const role = [
        "แอดมิน",
        "ผู้ใช้งาน (ไม่สามารถแก้ไขข้อมูลได้)",
        "ผู้ใช้งาน (สามารถแก้ไขข้อมูลได้)"
      ];
      setAllRole(role);
      var resp;
      return R.isEmpty(id)
        ? (setSelectedPosition(position[0]),
          setSelectedRole(role[0]),
          setIsLoading(false))
        : ((resp = await axios("GET", `officers/${id}`)),
          setQueryData(R.path(["data", "data"], resp)),
          setSelectedPosition(R.path(["data", "data", "position"], resp)),
          setSelectedRole(R.path(["data", "data", "role"], resp)));
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
