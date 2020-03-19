import React from "react";
import AmountUser from "./AmountUser/index";
import ReceiveType from "./ReceiveType/index";
import Chart from "./Chart/index";
import { ContainerSection, ContainerInfo } from "../Styled/index";
import enhance from "./enhance";

const Dashboard = props => {
  const { chartData, amountUser, amountReceiveType } = props;
  return (
    <ContainerSection>
      <ContainerInfo>
        <AmountUser amountUser={amountUser} />
      </ContainerInfo>
      <ContainerInfo>
        <ReceiveType receiveType={amountReceiveType} />
      </ContainerInfo>
      <ContainerInfo width="50%">
        <Chart chartName="PieChart" chartData={chartData}></Chart>
      </ContainerInfo>
    </ContainerSection>
  );
};
export default enhance(Dashboard);
