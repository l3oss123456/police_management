//@flow
import React from "react";
import * as R from "ramda";
import Pagination from "./pagination";
import enhance from "./enhance";
import Modal from "../Modal/index";
import Select from "../Select/index";
import displayNotification from "../../utils/notification";
import { ContainerListingTable, ScrollStyled, StyledTable } from "./styled";

type Props = {
  scrollSize: Object,
  limitPage: Number,
  totalPage: Number,
  displayLimitPage: Number,
  changeLimitedPage: Number,
  pushUrl: Any,
  columns: Array,
  queryData: Array,
  isPrint: Boolean
};

const ListingTable = (props: Props) => {
  const {
    scrollSize,
    limitPage,
    totalPage,
    currentPage,
    displayLimitPage,
    changeLimitedPage,
    pushUrl,
    columns,
    queryData,
    visibleModal,
    setVisibleModal,
    allAgent,
    selectedAgent,
    setSelectedAgent
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
        currentPage={currentPage}
        displayLimitPage={displayLimitPage}
        changeLimitedPage={changeLimitedPage}
        pushUrl={pushUrl}
        totalPage={totalPage}
      ></Pagination>
      <Modal
        destroyOnClose
        title="ยืนยันข้อมูลการพิมพ์"
        visible={visibleModal}
        onOk={() => {
          if (R.isEmpty(selectedAgent)) {
            displayNotification("error", "กรุณาเลือกผู้รับยา");
          } else {
            const { selectedUserId } = props;
            window.location.href = `https://police.netlify.com/home/${selectedUserId}/${selectedAgent}`;
            setVisibleModal(false);
          }
        }}
        onCancel={() => {
          setVisibleModal(false);
        }}
      >
        กรุณาเลือกผู้รับยา :
        <Select
          getIndex
          allData={allAgent}
          selected={setSelectedAgent}
          width="250px"
        ></Select>
      </Modal>
    </ContainerListingTable>
  );
};
export default enhance(ListingTable);
