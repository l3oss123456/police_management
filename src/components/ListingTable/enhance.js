import React from "react";
import {
  compose,
  withState,
  withHandlers,
  lifecycle,
  branch,
  renderComponent
} from "recompose";
import styled from "styled-components";
import { Popconfirm, Icon } from "antd";
import { withRouter } from "react-router-dom";
import * as R from "ramda";
// import setNewColumns from "./setNewColumns";
import queryDefault from "../../utils/queryDefault";
import axios from "../../core/libs/axios/axios";
import Loading from "../Loading/index";
import displayNotification from "../../utils/notification";

const ContainerOperation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90px;
`;
const IconStyled = styled(Icon)`
  font-size: 20px;
`;

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
  withState("columns", "setColumns", []),
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
    },
    setNewColumns: props => () => {
      const { tableColumns, history, schema } = props;
      const handleDelete = async (index, id) => {
        const { queryData, setQueryData } = props;
        await axios("DELETE", `${schema}/${id}`);
        queryData.splice(index, 1);
        setQueryData(queryData);
        displayNotification("success", "Delete Successful");
      };
      return [
        ...tableColumns,
        {
          dataIndex: "operation",
          render: (text, record, index) => {
            return (
              <ContainerOperation>
                <IconStyled
                  type="edit"
                  theme="twoTone"
                  onClick={() => history.push(`/${schema}/${record.id}/edit`)}
                />
                <Popconfirm
                  title="Sure to delete?"
                  onConfirm={() => handleDelete(index, record.username)}
                >
                  <IconStyled type="delete" theme="twoTone" />
                </Popconfirm>
              </ContainerOperation>
            );
          }
        }
      ];
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
        setTotalPage,
        setColumns,
        setNewColumns
      } = this.props;
      const { search } = location;
      history.push(`?page=${currentPage}&limit=${limitPage}`);
      const resp = await axios("GET", `${schema}${search}`);
      // setColumns(setNewColumns(tableColumns, schema, history, setQueryData));
      setQueryData(R.path(["data", "data"], resp));
      setColumns(setNewColumns());
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
