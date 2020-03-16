import styled from "styled-components";
import Theme from "../../core/theme/index";

export const StyledContainerSearch = styled.div`
  display: flex;
`;
export const StyledSearch = styled.div`
  display:flex
  justify-content: space-around
  align-items:center
  padding: 0px 15px 0px 0px;
  width: ${props => (props.width: "")};
`;

export const Text = styled.h1`
  padding: 3px 0 0 0;
  color: ${Theme.colors.white};
  font-family: ${Theme.fontFamily.primaryBold}
  font-size: ${Theme.fontSize.text}
`;
