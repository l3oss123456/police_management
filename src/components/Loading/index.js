import React from "react";
import { Spin, Icon } from "antd";
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
      width={window.innerWidth - 345}
      height={window.innerHeight - 205}
    >
      <Spin indicator={<Icon type="loading" style={{ fontSize: 44 }} spin />} />
    </ContainerSpin>
  );
};
export default Loading;
