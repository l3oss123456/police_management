import { compose, withState, withHandlers, lifecycle } from "recompose";
import jwt from "jwt-simple";
import axios from "../../core/libs/axios/axios";
// import notification from "../../utils/notification"
import displayNotification from "../../utils/notification";

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
          const { setRespStatus } = props;
          // const data = {
          //     username: values.username,
          //     password: values.password
          // }
          const token = jwt.encode(
            {
              username: values.username,
              password: values.password
            },
            "secretKey"
          );
          const resp = await axios("POST", "/v1/login", token);
          if (resp.status !== 200) {
            setRespStatus(resp.status);
            displayNotification("error", "Invalid username or password !");
          } else {
          }
        }
      });
    }
  }),
  lifecycle({
    async componentDidMount() {
      // document.title = "Management System";
    }
  })
);
