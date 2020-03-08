import styled from "styled-components";
import { Card, Button } from "antd";

export const StyledBackgroundLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImgLayout = styled.img`
  height: 100vh;
  width: 100vw;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledCard = styled(Card)`
  height: 380px;
  width: 380px;

  border-radius: 20px;
  padding: 10px;
  position: absolute;

  display: flex;
  justify-content: center;
`;

export const StyledHeader = styled.div`
  font-size: 36px;
  font-weight: bold;

  width: 200px;
`;

export const StyledLogin = styled.div`
  padding-top: 40px;
`;

export const StyledWarning = styled.div`
  color: red;
  font-size: 13px;
`;
export const StyledButton = styled(Button)`
  .ant-btn {
    color: #d9d9d9;
    background-color: #495057;
    border-color: #d9d9d9;
  }
`;
