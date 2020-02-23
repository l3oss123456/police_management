import React from "react";
import { Spin } from "antd";
import styled from "styled-components";

const ContainerSpin = styled.div`
  width: ${props => (props.width ? `${props.width}px` : "100vw")};
  height: ${props => (props.height ? `${props.height}px` : "100vh")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <ContainerSpin
      width={window.innerWidth - 385}
      height={window.innerHeight - 205}
    >
      <Spin size="large" />
    </ContainerSpin>
  );
};
export default Loading;
