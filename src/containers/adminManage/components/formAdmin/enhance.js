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
import position from "../../../../utils/policePosition";
import displayNotification from "../../../../utils/notification";
import Loading from "../../../../components/Loading/index";

export default compose(
  withRouter,
  withState("allPosition", "setAllPosition", position),
  withState("selectedPosition", "setSelectedPosition", ""),
  withState("allRole", "setAllRole", ["แอดมิน", "ผู้แก้ไข", "ผู้อ่าน"]),
  withState("selectedRole", "setSelectedRole", ""),
  withState("queryData", "setQueryData", {}),
  withState("isLoading", "setIsLoading", true),
  withState("respStatus", "setRespStatus", ""),
  withHandlers({
    insertOfficer: props => (e, form) => {
      e.preventDefault();
      form.validateFields(async (err, values) => {
        if (!err) {
          const {
            selectedPosition,
            selectedRole,
            history,
            setRespStatus
          } = props;
          const { getFieldValue } = form;
          const data = {
            username: getFieldValue("username"),
            password: getFieldValue("password"),
            firstName: getFieldValue("firstName"),
            lastName: getFieldValue("lastName"),
            position: selectedPosition,
            role: selectedRole
          };
          const resp = await axios("POST", "officers", data);
          if (resp.data.statusCode !== 200) {
            setRespStatus(resp.data.statusCode);
            displayNotification(
              "error",
              "ชื่อผู้ใช้งานหรือรหัสผ่าน มีอยู่ในระบบแล้ว"
            );
          } else {
            history.push("/management/admin");
            displayNotification("success", "เพิ่มข้อมูลสำเร็จ");
          }
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
          history.push("/management/admin");
          displayNotification("success", "Edit Successful");
        }
      });
    }
  }),
  lifecycle({
    async componentDidMount() {
      const {
        setSelectedPosition,
        setAllRole,
        setSelectedRole,
        setQueryData,
        setIsLoading,
        match,
        allRole,
        allPosition
      } = this.props;
      const id = R.pathOr("", ["params", "id"], match);
      setAllRole(allRole);
      var resp;
      return R.isEmpty(id)
        ? (setSelectedPosition(allPosition[0]),
          setSelectedRole(allRole[0]),
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
