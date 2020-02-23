import React from "react";
import { Pagination } from "antd";
import styled from "styled-components";
import Select from "../Select/index";

const ContainerPagination = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const ContainerElement = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Text = styled.h1`
  margin-right: ${props => (props.marginRight ? "15px" : "")};
  margin-left: ${props => (props.marginLeft ? "15px" : "")};
  margin-top: ${props => (props.marginTop ? "8px" : "")};
`;
const ComponentPagination = props => {
  const {
    limitPage,
    displayLimitPage,
    changeLimitedPage,
    pushUrl,
    currentPage
  } = props;
  return (
    <ContainerPagination>
      <ContainerElement>
        <Text marginRight marginTop>
          Per Page :
        </Text>
        <Select
          defaultData={limitPage}
          allData={displayLimitPage}
          selected={changeLimitedPage}
          width="60px"
        />
        <Text marginLeft marginTop>{`Show ${limitPage} of 
        ${displayLimitPage[displayLimitPage.length - 1]}`}</Text>
      </ContainerElement>

      <ContainerElement>
        <Pagination
          onChange={pushUrl}
          defaultCurrent={currentPage}
          pageSize={limitPage}
          // total={totalPage}
          total={100}
        />
      </ContainerElement>
    </ContainerPagination>
  );
};
export default ComponentPagination;
