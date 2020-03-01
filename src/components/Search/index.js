import React from "react";
import { Input, Button } from "antd";
import styled from "styled-components";
import * as R from "ramda";
import { getItemLocalStorage } from "../../core/storage/index";
import enhance from "./enhance";

const StyledContainerSearch = styled.div`
  display: flex;
`;
const StyledSearch = styled.div`
  padding: 0px 15px 0px 0px;
  width: ${props => (props.width: "")};
`;

const SearchComponent = props => {
  const { pushSearchUrl, pathUrl, addBtnText, history } = props;
  const role = R.path(["role"], JSON.parse(getItemLocalStorage("userInfo")));
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
      {role === "แอดมิน" && (
        <StyledSearch>
          <Button
            icon="plus"
            onClick={() => history.push(`/${pathUrl}/create`)}
          >
            {addBtnText}
          </Button>
        </StyledSearch>
      )}
    </StyledContainerSearch>
  );
};
export default enhance(SearchComponent);
