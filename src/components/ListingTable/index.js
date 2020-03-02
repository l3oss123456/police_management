//@flow
import React from "react";
import { Table } from "antd";
import * as R from "ramda";
import styled from "styled-components";
import Pagination from "./pagination";
import enhance from "./enhance";

type Props = {
  scrollSize: Object,
  limitPage: Number,
  totalPage: Number,
  displayLimitPage: Number,
  changeLimitedPage: Number,
  pushUrl: Any,
  columns: Array,
  queryData: Array
};

const ContainerListingTable = styled.div`
  margin-top: 20px;
`;
const ScrollStyled = styled.div`
  background: white;
  height: ${props => (props.height ? props.height : "")};
  overflow-y: ${props => (props.height ? "scroll" : "")};
  width: ${props => (props.width ? props.width : "")};
  overflow-x: ${props => (props.width ? "scroll" : "")};
`;

const ListingTable = (props: Props) => {
  const {
    scrollSize,
    limitPage,
    totalPage,
    displayLimitPage,
    changeLimitedPage,
    pushUrl,
    columns,
    queryData
  } = props;
  return (
    <ContainerListingTable>
      <ScrollStyled
        height={R.path(["height"], scrollSize)}
        width={R.path(["width"], scrollSize)}
      >
        <Table
          columns={columns}
          dataSource={queryData}
          pagination={false}
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
