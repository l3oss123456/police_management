import React from "react";
import {
  compose,
  withState,
  withHandlers,
  lifecycle,
  branch,
  renderComponent
} from "recompose";
import { Popconfirm } from "antd";
import { withRouter } from "react-router-dom";
import * as R from "ramda";
import queryDefault from "../../utils/queryDefault";
import axios from "../../core/libs/axios/axios";
import Loading from "../Loading/index";
import { getItemLocalStorage } from "../../core/storage/index";
import displayNotification from "../../utils/notification";
import { ContainerOperation, IconStyled } from "./styled";

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
    changeLimitedPage: props => limit => {
      const { setLimitPage, currentPage, history, location } = props;
      const { search } = queryDefault;
      setLimitPage(limit);
      const urlPage = location.search.substring(6, 7);
      var page;
      if (currentPage <= urlPage) {
        page = 1;
      } else {
        page = currentPage;
      }
      search
        ? history.push(`?page=${page}&limit=${limit}&search=${search}`)
        : history.push(`?page=${page}&limit=${limit}`);
    },
    setNewColumns: props => () => {
      const { tableColumns, history, schema, path, isPrint } = props;
      const handleDelete = async (index, id) => {
        const { queryData, setQueryData } = props;
        await axios("DELETE", `${schema}/${id}`);
        queryData.splice(index, 1);
        setQueryData(queryData);
        displayNotification("success", "Delete Successful");
      };

      const role = R.path(
        ["role"],
        JSON.parse(getItemLocalStorage("userInfo"))
      );
      return (
        tableColumns && [
          ...tableColumns,
          {
            dataIndex: "operation",
            render: (text, record, index) => {
              return (
                <div>
                  {role !== "ผู้อ่าน" && (
                    <ContainerOperation>
                      <IconStyled
                        type="edit"
                        theme="twoTone"
                        onClick={() =>
                          history.push(`/${path}/${record.id}/edit`)
                        }
                      />
                      <Popconfirm
                        title="คุณแน่ใจ จะลบข้อมูลนี้ ?"
                        onConfirm={() => handleDelete(index, record.id)}
                      >
                        <IconStyled type="delete" theme="twoTone" />
                      </Popconfirm>
                    </ContainerOperation>
                  )}
                </div>
              );
            }
          },
          {
            dataIndex: "print",
            render: (text, record) => {
              return (
                <div>
                  {isPrint && (
                    <a
                      href="# "
                      onClick={() =>
                        (window.location.href = `http://localhost:3000/management/admin/${record.id}/edit`)
                      }
                    >
                      print
                    </a>
                  )}
                </div>
              );
            }
          }
        ]
      );
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
