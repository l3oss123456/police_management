import React from "react";
import Layout from "../../components/Layout/index";
import AmountUser from "./components/UserInformation/AmountUser/index";
import ReceiveType from "./components/UserInformation/ReceiveType/index";
import Chart from "./components/Chart/index";
import Search from "../../components/Search/index";
import Table from "../../components/ListingTable/index";
import { ContainerSection, ContainerInfo } from "./components/Styled/index";
import columns from "./components/ColumnsUserHistory/index";
import enhance from "./enhance";

const Dashboard = props => {
  const { chartData, amountUser, amountReceiveType } = props;
  return (
    <div>
      <Layout userRole="admin" selectedKey="dashboard">
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

        <ContainerSection>
          <div
            style={{
              paddingTop: "40px",
              width: window.innerWidth - 330 + "px"
            }}
          >
            <Search isSelectedGender isSelectedRangeAge isRangePicker />
            <Table
              schema="users-history"
              path="management/user"
              tableColumns={columns}
              scrollSize={{
                width: false,
                height: window.innerHeight - 500 + "px"
              }}
              isReadOnly
            />
          </div>
        </ContainerSection>
      </Layout>
    </div>
  );
};
export default enhance(Dashboard);
