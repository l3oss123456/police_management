import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout/index";
import Chart from "./components/Chart/index";
import Search from "../../components/Search/index";
import Table from "../../components/ListingTable/index";

const ContainerSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ContainerChartInfo = styled.div`
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

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
          <ContainerChartInfo>Information1</ContainerChartInfo>
          <ContainerChartInfo>Information2</ContainerChartInfo>
          <ContainerChartInfo>
            <Chart chartName="PieChart" chartData={chartData}></Chart>
          </ContainerChartInfo>
        </ContainerSection>

        <ContainerSection>
          <div
            style={{
              paddingTop: "40px",
              width: window.innerWidth - 330 + "px"
            }}
          >
            <Search />
            <Table
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
