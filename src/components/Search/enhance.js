import { compose, withState, withHandlers } from "recompose";
import { debounce } from "debounce";

export default compose(
  withState("searchValue", "setSearchValue", ""),
  withHandlers({
    pushSearchUrl: props => async () => {
      const { searchValue } = props;
      console.log("searchValue: ", searchValue);
    }
  }),
  withHandlers({
    debounceSearchValue: props =>
      debounce(e => {
        const { setSearchValue, pushSearchUrl } = props;
        setSearchValue(e);
        pushSearchUrl();
      }, 1000)
  })
);
