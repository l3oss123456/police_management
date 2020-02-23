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
  const { pushSearchUrl, schema, history } = props;
  return (
    <StyledContainerSearch>
      <StyledSearch width="280px">
        <Input
          autoFocus
          placeholder="search"
          // onChange={e => debounceSearchValue(e.target.value)}
          onPressEnter={e => pushSearchUrl(e.target.value)}
        />
      </StyledSearch>
      <StyledSearch>
        <Button icon="search" onClick={() => pushSearchUrl()}>
          search
        </Button>
      </StyledSearch>
      <StyledSearch>
        <Button icon="plus" onClick={() => history.push(`/${schema}/create`)}>
          add {schema}
        </Button>
      </StyledSearch>
    </StyledContainerSearch>
  );
};
export default enhance(SearchComponent);
