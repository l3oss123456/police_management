import React from "react";
import Layout from "../../components/Layout/index";
import UserInfo from "./components/UserInformation/index";
import Search from "../../components/Search/index";
import Table from "../../components/ListingTable/index";
import { ContainerSection } from "./components/Styled/index";
import columns from "./components/ColumnsUserHistory/index";

const Dashboard = props => {
  return (
    <div>
      <Layout userRole="admin" selectedKey="dashboard">
        <ContainerSection>
          <UserInfo />
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
export default Dashboard;
