import styled from "styled-components";
import { Row, Button, Form, Input } from "antd";
import Theme from "../../../../core/theme/index";
const { Item } = Form;

export const Container = styled(Row)`
  padding: 20px;
`;
export const Section = styled.div`
  background: #fff;
  margin-bottom: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;
export const Title = styled.h2`
  font-size: 20px;
  color: gray;
`;
export const Footer = styled.div`
  background: white;
  position: sticky;
  width: 100%;
  height: 64px;
  bottom: 0;
`;
export const StyledButtonCancel = styled(Button)`
  width: 130px;
  &:hover {
    border-color: #9c9c9c;
    color: white;
    color: black;
  }
`;
export const StyledButtonSave = styled(Button)`
  background: black;
  color: white;
  width: 130px;
  margin-left: 20px;
  margin-right: 20px;
  &:hover {
    background-color: #9c9c9c;
    border-color: #9c9c9c;
    color: white;
  }
`;
export const ContainerFooterBtn = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SectionHeader = styled.h3`
  background: #fafafa;
  border-bottom: 1px solid #ededed;
  padding: 15px 20px;
  font-family: ${Theme.fontFamily.primaryBold}
  font-size: ${Theme.fontSize.text}
`;
export const SectionContent = styled.div`
  padding: 20px;
`;
export const StyledWarning = styled.div`
  color: red;
  font-size: 13px;
  font-family: ${Theme.fontFamily.primaryBold};
`;

export const StyledFormItem = styled(Item)`
  font-family: ${Theme.fontFamily.primary};
  font-size: ${Theme.fontSize.text};
`;

export const ScrollStyled = styled.div`
  background: white;
  height: ${props => (props.height ? props.height : "")};
  overflow-y: ${props => (props.height ? "scroll" : "")};
  width: ${props => (props.width ? props.width : "")};
  overflow-x: ${props => (props.width ? "scroll" : "")};
`;

export const SectionUserInformation = styled.div`
  display: flex;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "space-around"};
`;

export const ContainerTopic = styled.div`
  font-size: ${Theme.fontSize.text}
  font-family: ${Theme.fontFamily.primary}
  margin-top: 5px;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : "")}
  `;

export const InputStyled = styled(Input)`
  width: ${props => (props.width ? props.width : "200px")};
`;
