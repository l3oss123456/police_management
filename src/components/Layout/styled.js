import styled from "styled-components";
import { Button, Icon } from "antd";
import Theme from "../../core/theme/index";

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 35px;
  margin-right: 40px;
  color: ${Theme.colors.white};
`;
export const ContainerInfo = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 50px;
  font-size: ${Theme.fontSize.text}
  font-family: ${Theme.fontFamily.primary}
`;
export const LogoutBtn = styled(Button)`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;
export const IconStyled = styled(Icon)`
  font-size: ${props => (props.width: "")};
  margin-right: ${props => (props.marginRight: "")};
`;

export const StyledImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px 30px 0px;
`;
export const StyledImgLayout = styled.img`
  height: 100px;
  width: 100px;
`;
