import styled from "styled-components";
import { Table, Pagination, Icon } from "antd";
import Theme from "../../core/theme/index";

export const ContainerListingTable = styled.div`
  margin-top: 20px;
`;

export const ScrollStyled = styled.div`
  background: white;
  height: ${props => (props.height ? props.height : "")};
  overflow-y: ${props => (props.height ? "scroll" : "")};
  width: ${props => (props.width ? props.width : "")};
  overflow-x: ${props => (props.width ? "scroll" : "")};
`;

export const StyledTable = styled(Table)`
 font-size: ${Theme.fontSize.text}
 font-family: ${Theme.fontFamily.primary}
`;

export const ContainerPagination = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const ContainerElement = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: ${Theme.fontSize.text}
  font-family: ${Theme.fontFamily.primary}
`;

export const Text = styled.h1`
  margin-right: ${props => (props.marginRight ? "15px" : "")};
  margin-left: ${props => (props.marginLeft ? "15px" : "")};
  margin-top: ${props => (props.marginTop ? "8px" : "")};
  color: ${Theme.colors.white};
  font-family: ${Theme.fontFamily.primary};
`;

export const StyledPagination = styled(Pagination)`
  color: ${Theme.colors.white};
  font-family: ${Theme.fontFamily.primary};
`;

export const ContainerOperation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70px;
`;
export const IconStyled = styled(Icon)`
  font-size: 20px;
`;
