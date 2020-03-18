import React from "react";
import Layout from "../../components/Layout/index";
import Chart from "./components/Chart/index";
import Search from "../../components/Search/index";
import Table from "../../components/ListingTable/index";
import { ContainerSection, ContainerInfo } from "./components/Styled/index";
import columns from "../userManage/components/tableUserManage/index";

const Dashboard = props => {
  const chartData = [
    {
      country: "Lithuania",
      litres: 50001.9,
      units: 250
    },
    {
      country: "Czech Republic",
      litres: 301.9,
      units: 222
    },
    {
      country: "Ireland",
      litres: 201.1,
      units: 170
    },
    {
      country: "Germany",
      litres: 165.8,
      units: 122
    },
    {
      country: "Australia",
      litres: 139.9,
      units: 99
    },
    {
      country: "Austria",
      litres: 128.3,
      units: 85
    },
    {
      country: "UK",
      litres: 99,
      units: 93
    },
    {
      country: "Belgium",
      litres: 60,
      units: 50
    },
    {
      country: "The Netherlands",
      litres: 50,
      units: 42
    }
  ];
  return (
    <div>
      <Layout userRole="admin" selectedKey="dashboard">
        <ContainerSection>
          <ContainerInfo>Information1</ContainerInfo>
          <ContainerInfo>Information2</ContainerInfo>
          <ContainerInfo>
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
              schema="users"
              path="management/user"
              tableColumns={columns}
              scrollSize={{
                width: false,
                height: window.innerHeight - 500 + "px"
              }}
            />
          </div>
        </ContainerSection>
      </Layout>
    </div>
  );
};
export default Dashboard;
