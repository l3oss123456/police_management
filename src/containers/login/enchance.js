import { compose, withState, withHandlers } from "recompose";
// import jwt from "jwt-simple";
import axios from "../../core/libs/axios/axios";
// import notification from "../../utils/notification"
import displayNotification from "../../utils/notification";
import { setItemLocalStorage } from "../../core/storage/index";

export default compose(
  withState("username", "setUsername", ""),
  withState("password", "setPassword", ""),
  withState("status", "setStatus", false),
  withState("respStatus", "setRespStatus", ""),
  withHandlers({
    hasErrors: props => fieldsError => {
      return Object.keys(fieldsError).some(field => fieldsError[field]);
    },
    handleChangeInput: props => e => {
      const { respStatus, setRespStatus } = props;
      if (respStatus !== "") {
        setRespStatus("");
      }
    },

    handleSubmit: props => (form, e) => {
      e.preventDefault();
      form.validateFields(async (err, values) => {
        if (!err) {
          const { setRespStatus, history } = props;
          // const data = {
          //     username: values.username,
          //     password: values.password
          // }
          // const token = jwt.encode(
          //   {
          //     username: values.username,
          //     password: values.password
          //   },
          //   "secretKey"
          // );
          const data = {
            username: values.username,
            password: values.password
          };
          const resp = await axios("POST", "officers/login", data);
          if (resp.data.statusCode !== 200) {
            setRespStatus(resp.data.statusCode);
            displayNotification(
              "error",
              "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง, กรุณาตรวจสอบอีกครั้ง !"
            );
          } else {
            setItemLocalStorage(
              "userInfo",
              JSON.stringify({
                name: resp.data.data.firstName + " " + resp.data.data.lastName,
                role: resp.data.data.role
              })
            );
            displayNotification("success", "Login สำเร็จ");
            history.push("/management/admin");
          }
        }
      });
    }
  })
);
