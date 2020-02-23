import { compose, withState, withHandlers, lifecycle } from "recompose";
import { withRouter } from "react-router-dom";
import queryDefault from "../../utils/queryDefault";

export default compose(
  withRouter,
  withState("currentPage", "setCurrentPage", queryDefault.page),
  withState("limitPage", "setLimitPage", queryDefault.limit),
  withState("totalPage", "setTotalPage", queryDefault.total),
  withState(
    "displayLimitPage",
    "setDisplayLimitPage",
    queryDefault.displayLimit
  ),
  withHandlers({
    pushUrl: props => value => {
      const { limitPage, history } = props;
      const { search } = queryDefault;
      search
        ? history.push(`?page=${value}&limit=${limitPage}&search=${search}`)
        : history.push(`?page=${value}&limit=${limitPage}`);
    },
    changeLimitedPage: props => value => {
      const { setLimitPage, currentPage, history } = props;
      const { search } = queryDefault;
      setLimitPage(value);
      search
        ? history.push(`?page=${currentPage}&limit=${value}&search=${search}`)
        : history.push(`?page=${currentPage}&limit=${value}`);
    }
  }),
  lifecycle({
    async componentDidMount() {
      const { history, currentPage, limitPage } = this.props;
      history.push(`?page=${currentPage}&limit=${limitPage}`);
    },
    async componentDidUpdate(prevProps) {
      // const { location } = prevProps;
      // const { search } = location;
      // console.log("search: ", this.props.location.search);
      // console.log("prevSearch: ", prevProps.location.search);
      // if (this.props.location.search !== prevProps.location.search) {
      // }
    }
  })
);
