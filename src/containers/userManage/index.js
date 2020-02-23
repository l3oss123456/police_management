import React from "react";
import Layout from "../../components/Layout/index";
import Search from "../../components/Search/index";
import Table from "../../components/ListingTable/index";

const userManage = props => {
  return (
    <div>
      <Layout
        userRole="admin"
        selectedKey="userManagement"
        openKey="management"
      >
        <Search />
        <Table
          scrollSize={{ width: false, height: window.innerHeight - 310 + "px" }}
        />
      </Layout>
    </div>
  );
};
export default userManage;
