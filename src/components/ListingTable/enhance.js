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
  withState("isLoading", "setIsLoading", false),
  withState("queryData", "setQueryData", []),
  withState("columns", "setColumns", []),
  withState("visibleModal", "setVisibleModal", false),
  withState("allAgent", "setAllAgent", []),
  withState("selectedAgent", "setSelectedAgent", ""),
  withState("selectedUserId", "setSelectedUserId", ""),

  withHandlers({
    pushUrl: props => value => {
      const { limitPage, history } = props;
      const { search } = queryDefault;
      search
        ? history.push(`?page=${value}&limit=${limitPage}&${search}`)
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
        ? history.push(`?page=${page}&limit=${limit}&${search}`)
        : history.push(`?page=${page}&limit=${limit}`);
    },
    setNewColumns: props => () => {
      const {
        tableColumns,
        history,
        schema,
        path,
        isReadOnly,
        isPrint
      } = props;
      const handleDelete = async (index, id) => {
        const { queryData, setQueryData } = props;
        await axios("DELETE", `${schema}/${id}`);
        queryData.splice(index, 1);
        setQueryData(queryData);
        displayNotification("success", "ลบข้อมูลสำเร็จ");
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
                  {role !== "ผู้อ่าน" && !isReadOnly && (
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
              const {
                setVisibleModal,
                setSelectedAgent,
                setAllAgent,
                setSelectedUserId
              } = props;
              return (
                <div>
                  {isPrint && role !== "ผู้อ่าน" && (
                    <a
                      href="# "
                      onClick={() =>
                        R.isEmpty(record.agent)
                          ? (setSelectedUserId(record.id),
                            setVisibleModal(true),
                            setAllAgent(
                              record.agent.map((agent, index) => {
                                return (
                                  agent.prefix +
                                  agent.firstName +
                                  " " +
                                  agent.lastName
                                );
                              })
                            ),
                            setSelectedAgent(""))
                          : (setSelectedUserId(record.id),
                            setVisibleModal(true),
                            setAllAgent(
                              record.agent.map((agent, index) => {
                                return (
                                  agent.prefix +
                                  agent.firstName +
                                  " " +
                                  agent.lastName
                                );
                              })
                            ),
                            setSelectedAgent(0))
                      }
                    >
                      <u>พิมพ์</u>
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
        setNewColumns,
        setIsLoading
      } = this.props;
      const { search } = location;
      history.push(`?page=${currentPage}&limit=${limitPage}`);
      const resp = await axios("GET", `${schema}${search}`);
      if (resp.status !== 200) setIsLoading(true);
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
