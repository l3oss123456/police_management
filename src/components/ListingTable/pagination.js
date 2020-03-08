import React from "react";
import Select from "../Select/index";
import {
  ContainerPagination,
  ContainerElement,
  Text,
  StyledPagination
} from "./styled";

const ComponentPagination = props => {
  const {
    limitPage,
    displayLimitPage,
    changeLimitedPage,
    totalPage,
    pushUrl,
    currentPage
  } = props;
  return (
    <ContainerPagination>
      <ContainerElement>
        <Text marginRight marginTop>
          แสดงข้อมูล (ต่อหน้า) :
        </Text>
        <Select
          defaultData={limitPage}
          allData={displayLimitPage}
          selected={changeLimitedPage}
          width="60px"
        />
        <Text marginLeft marginTop>{`แสดง ${limitPage} จาก 
        ${displayLimitPage[displayLimitPage.length - 1]}`}</Text>
      </ContainerElement>

      <ContainerElement>
        <StyledPagination
          onChange={pushUrl}
          defaultCurrent={currentPage}
          pageSize={limitPage}
          total={totalPage}
        />
      </ContainerElement>
    </ContainerPagination>
  );
};
export default ComponentPagination;
