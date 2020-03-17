import { compose, withState, withHandlers, lifecycle } from "recompose";
// import jwt from "jwt-simple";
import axios from "../../core/libs/axios/axios";
import displayNotification from "../../utils/notification";
import { setItemLocalStorage } from "../../core/storage/index";
import { clearItem } from "../../core/storage/index";

export default compose(
  withState("username", "setUsername", ""),
  withState("password", "setPassword", ""),
  withState("status", "setStatus", false),
  withState("respStatus", "setRespStatus", ""),
  withState("isLogin", "setIsLogin", false),
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
            const { setRespStatus } = props;
            setRespStatus(resp.data.statusCode);
            displayNotification(
              "error",
              "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง, กรุณาตรวจสอบอีกครั้ง !"
            );
          } else {
            const { setIsLogin } = props;
            setItemLocalStorage(
              "userInfo",
              JSON.stringify({
                id: resp.data.data.id,
                name: resp.data.data.firstName + " " + resp.data.data.lastName,
                role: resp.data.data.role
              })
            );
            displayNotification("success", "Login สำเร็จ");
            setIsLogin(true);
          }
        }
      });
    }
  }),
  lifecycle({
    async componentDidMount() {
      clearItem();
    }
  })
);
