import { compose, withState, withHandlers } from "recompose";
import { withRouter } from "react-router-dom";
import qs from "qs";
import * as R from "ramda";
import moment from "moment";
import objectToQueryString from "../../utils/queryString";
import axios from "../../core/libs/axios/axios";
import queryDefault from "../../utils/queryDefault";
import displayNotification from "../../utils/notification";

export default compose(
  withRouter,
  withState("searchValue", "setSearchValue", ""),
  withState("rangeDate", "setRangeDate", ""),
  withState("selectedGender", "setSelectedGender", "ทั้งหมด"),
  withState("selectedRangeAge", "setSelectedRangeAge", "ทั้งหมด"),

  withHandlers({
    cardSearching: props => async schema => {
      const cardInfo = await axios(
        "GET",
        `https://1ae71657.ngrok.io/card-data?fbclid=IwAR0KVDiptNi072UOXCB9p96JaWQkgl9gwQiHxlDtwNQA-PPztm9N_zMLszQ`,
        "",
        true
      );
      if (cardInfo.status === 200) {
        const { location } = props;
        const oldQs = qs.parse(location.search, {
          ignoreQueryPrefix: true
        });
        const idCard = R.path(["data", "idCardNo"], cardInfo);
        const query = `?page=${oldQs.page}&limit=${oldQs.limit}&search=${idCard}`;
        const resp = await axios("GET", `${schema}?${query}`);
        const data = R.pathOr([], ["data", "data"], resp);
        if (R.isEmpty(data)) {
          displayNotification("warning", "ยังไม่มีข้อมูลในระบบ !");
        } else {
          const { history } = props;
          var newQs = `?page=${oldQs.page}&limit=${oldQs.limit}&search=${idCard}`;
          history.push(newQs);
          displayNotification("success", "มีข้อมูลในระบบ !");
        }
      } else {
        displayNotification("error", "กรุณาเสียบบัตรประชา่ชนเข้าเครื่อง !");
      }
    },
    pushSearchUrl: props => async () => {
      const {
        searchValue,
        selectedGender,
        selectedRangeAge,
        history,
        location,
        rangeDate
      } = props;
      const oldQs = qs.parse(location.search, {
        ignoreQueryPrefix: true
      });
      const searchOptions = objectToQueryString({
        search: searchValue,
        gender: selectedGender === "ทั้งหมด" ? "" : selectedGender,
        age: selectedRangeAge === "ทั้งหมด" ? "" : selectedRangeAge,
        duration: !R.isEmpty(rangeDate) && [
          moment(rangeDate[0]).format("YYYY-MM-DD"),
          moment(rangeDate[1]).format("YYYY-MM-DD")
        ]
      });
      queryDefault.search = searchOptions;
      var newQs = "";
      R.isEmpty(searchOptions)
        ? (newQs = `?page=${oldQs.page}&limit=${oldQs.limit}`)
        : (newQs = `?page=${oldQs.page}&limit=${oldQs.limit}&${searchOptions}`);
      history.push(newQs);
    }
  })
);
