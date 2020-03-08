//@flow
import React from "react";
import * as R from "ramda";
import Pagination from "./pagination";
import enhance from "./enhance";
import { ContainerListingTable, ScrollStyled, StyledTable } from "./styled";

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
        <StyledTable
          columns={columns}
          dataSource={queryData}
          pagination={false}
        ></StyledTable>
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
