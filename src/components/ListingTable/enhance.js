import {
  compose,
  withState,
  withHandlers,
  lifecycle,
  branch,
  renderComponent
} from "recompose";
import { withRouter } from "react-router-dom";
import * as R from "ramda";
import queryDefault from "../../utils/queryDefault";
import axios from "../../core/libs/axios/axios";
import Loading from "../Loading/index";

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
  withState("isLoading", "setIsLoading", true),
  withState("queryData", "setQueryData", []),
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
      const {
        history,
        currentPage,
        limitPage,
        schema,
        location,
        setQueryData,
        setTotalPage
      } = this.props;
      const { search } = location;
      history.push(`?page=${currentPage}&limit=${limitPage}`);
      const resp = await axios("GET", `${schema}${search}`);
      setQueryData(R.path(["data", "data"], resp));
      setTotalPage(R.path(["data", "total"], resp));
    },
    async componentDidUpdate(prevProps) {
      const {
        location,
        setCurrentPage,
        setTotalPage,
        schema,
        setQueryData
      } = this.props;
      const { search } = location;
      if (prevProps.location.search !== search) {
        const resp = await axios("GET", `${schema}${search}`);
        setQueryData(R.path(["data", "data"], resp));
        setCurrentPage(search.substring(6, 7));
        setTotalPage(R.path(["data", "total"], resp));
      }
    }
  }),
  branch(props => {
    const { queryData } = props;
    if (props.isLoading === true && R.isEmpty(queryData)) {
      return true;
    } else {
      return false;
    }
  }, renderComponent(Loading))
);
