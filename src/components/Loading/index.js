import React from "react";
import { Spin, Icon } from "antd";
import { ContainerSpin } from "./styled";

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
