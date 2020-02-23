import { compose, withState, withHandlers, lifecycle } from "recompose";
// import axios from "../../core/libs/axios/axios";
// import { debounce } from "debounce";

export default compose(
  withState("username", "setUsername", ""),
  withState("password", "setPassword", ""),
  withState("status", "setStatus", false),
  withState("respStatus", "setRespStatus", ""),

  withHandlers({
    // searchValue: props =>
    //   debounce(e => {
    //     console.log(e);
    //   }, 500)
  }),
  lifecycle({
    async componentDidMount() {
      // document.title = "Management System";
    }
  })
);
