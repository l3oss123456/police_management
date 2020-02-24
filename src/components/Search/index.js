import React from "react";
import { Input, Button } from "antd";
import styled from "styled-components";
import enhance from "./enhance";

const StyledContainerSearch = styled.div`
  display: flex;
`;
const StyledSearch = styled.div`
  padding: 0px 15px 0px 0px;
  width: ${props => (props.width: "")};
`;

const SearchComponent = props => {
  const { pushSearchUrl, schema, addBtnText, history } = props;
  return (
    <StyledContainerSearch>
      <StyledSearch width="280px">
        <Input
          autoFocus
          placeholder="ค้นหาข้อมูล"
          // onChange={e => debounceSearchValue(e.target.value)}
          onPressEnter={e => pushSearchUrl(e.target.value)}
        />
      </StyledSearch>
      <StyledSearch>
        <Button icon="search" onClick={() => pushSearchUrl()}>
          ค้นหา
        </Button>
      </StyledSearch>
      <StyledSearch>
        <Button icon="plus" onClick={() => history.push(`/${schema}/create`)}>
          {addBtnText}
        </Button>
      </StyledSearch>
    </StyledContainerSearch>
  );
};
export default enhance(SearchComponent);
