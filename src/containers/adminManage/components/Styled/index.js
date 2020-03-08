import styled from "styled-components";
import { Row, Button, Form } from "antd";
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
