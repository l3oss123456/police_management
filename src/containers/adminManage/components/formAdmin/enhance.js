import { compose, withState, withHandlers, lifecycle } from "recompose";
import { withRouter } from "react-router-dom";
import axios from "../../../../core/libs/axios/axios";
import displayNotification from "../../../../utils/notification";

export default compose(
  withRouter,
  withState("allPosition", "setAllPosition", []),
  withState("selectedPosition", "setSelectedPosition", ""),
  withState("allRole", "setAllRole", []),
  withState("selectedRole", "setSelectedRole", ""),
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
    }
  }),
  lifecycle({
    async componentDidMount() {
      const {
        setAllPosition,
        setSelectedPosition,
        setAllRole,
        setSelectedRole
      } = this.props;
      const position = ["root1", "root2"];
      setAllPosition(position);
      setSelectedPosition(position[0]);

      const role = ["admin", "user"];
      setAllRole(role);
      setSelectedRole(role[0]);
    }
  })
);
