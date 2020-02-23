import React from "react";
import { Table, Popconfirm, Icon } from "antd";
import * as R from "ramda";
import styled from "styled-components";
import Pagination from "./pagination";
import enhance from "./enhance";

const ContainerListingTable = styled.div`
  margin-top: 20px;
`;
const ContainerOperation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90px;
`;
const IconStyled = styled(Icon)`
  font-size: 20px;
`;
const ScrollStyled = styled.div`
  background: white;
  height: ${props => (props.height ? props.height : "")};
  overflow-y: ${props => (props.height ? "scroll" : "")};
  width: ${props => (props.width ? props.width : "")};
  overflow-x: ${props => (props.width ? "scroll" : "")};
`;

const columns = [
  {
    title: "firstname",
    dataIndex: "firstName",
    key: "firstname"
  },
  {
    title: "lastname",
    dataIndex: "lastName",
    key: "lastname"
  },
  {
    title: "position",
    dataIndex: "position",
    key: "position"
  },
  {
    title: "username",
    dataIndex: "username",
    key: "username"
  },
  {
    // title: "Operation",
    dataIndex: "operation",
    render: (text, record) => {
      return (
        <ContainerOperation>
          <Popconfirm
            title="Sure to Edit?"
            // onConfirm={() => this.handleDelete(record.key)}
          >
            <IconStyled type="edit" theme="twoTone" />
          </Popconfirm>
          <Popconfirm
            title="Sure to delete?"
            // onConfirm={() => this.handleDelete(record.key)}
          >
            <IconStyled type="delete" theme="twoTone" />
          </Popconfirm>
        </ContainerOperation>
      );
    }
  }
];

const ListingTable = props => {
  const {
    scrollSize,
    limitPage,
    totalPage,
    displayLimitPage,
    changeLimitedPage,
    pushUrl,
    queryData
  } = props;
  // const dataSource = [];
  // for (let i = 1; i <= 100; i++) {
  //   dataSource.push({
  //     key: i,
  //     name: `Edward King ${i}`,
  //     age: 10 + i,
  //     address: `London, Park Lane no. ${i}`
  //   });
  // }
  return (
    <ContainerListingTable>
      <ScrollStyled
        height={R.path(["height"], scrollSize)}
        width={R.path(["width"], scrollSize)}
      >
        <Table
          columns={columns}
          dataSource={queryData}
          // pagination={{ pageSize: 10 }}
          pagination={false}
          // scroll={{ y: window.innerHeight - 385 + "px" }}
        ></Table>
      </ScrollStyled>
      <Pagination
        limitPage={limitPage}
        displayLimitPage={displayLimitPage}
        changeLimitedPage={changeLimitedPage}
        pushUrl={pushUrl}
        totalPage={totalPage}
      ></Pagination>
    </ContainerListingTable>
  );
};
export default enhance(ListingTable);
