import styled from "styled-components";
import { Card, Button } from "antd";
import Theme from "../../../../core/theme/index";

export const StyledBackgroundLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: ${Theme.colors.midnightEx};
`;

export const StyledImgLayout = styled.img`
  height: 90px;
  width: 90px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledCard = styled(Card)`
  height: 420px;
  width: 380px;

  border-radius: 20px;
  padding: 10px;
  position: absolute;

  display: flex;
  justify-content: center;
`;

export const StyledHeader = styled.div`
  font-family: ${Theme.fontFamily.primary}
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogin = styled.div`
  padding-top: 40px;
`;

export const StyledWarning = styled.div`
  color: red;
  font-size: 10px;
`;
export const StyledButton = styled(Button)`
  .ant-btn {
    color: #d9d9d9;
    background-color: #495057;
    border-color: #d9d9d9;
  }
`;
