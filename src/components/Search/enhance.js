import { compose, withState, withHandlers } from "recompose";
import { withRouter } from "react-router-dom";
import qs from "qs";
import * as R from "ramda";
import moment from "moment";
import objectToQueryString from "../../utils/queryString";
import queryDefault from "../../utils/queryDefault";

export default compose(
  withRouter,
  withState("searchValue", "setSearchValue", ""),
  withState("rangeDate", "setRangeDate", ""),
  withHandlers({
    pushSearchUrl: props => async () => {
      const { searchValue, history, location, rangeDate } = props;
      const oldQs = qs.parse(location.search, {
        ignoreQueryPrefix: true
      });
      const momentRangeDate = [
        moment(rangeDate[0]).format("YYYY-MM-DD"),
        moment(rangeDate[1]).format("YYYY-MM-DD")
      ];
      const searchOptions = objectToQueryString({
        search: searchValue,
        // selected: selectValue,
        duration: momentRangeDate && momentRangeDate
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
