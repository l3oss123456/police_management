import { compose, withHandlers } from "recompose";
import { withRouter } from "react-router-dom";
import qs from "qs";
import * as R from "ramda";
import objectToQueryString from "../../utils/queryString";
import queryDefault from "../../utils/queryDefault";

export default compose(
  withRouter,
  withHandlers({
    pushSearchUrl: props => async searchValue => {
      const { history, location } = props;
      const oldQs = qs.parse(location.search, {
        ignoreQueryPrefix: true
      });
      const searchOptions = objectToQueryString({
        search: searchValue
        // selected: selectValue,
        // duration: rangeDate && JSON.stringify(rangeDate)
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
