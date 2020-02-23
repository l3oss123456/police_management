import React from "react";
import Layout from "../../components/Layout/index";
import Search from "../../components/Search/index";
import Table from "../../components/ListingTable/index";
import columns from "./components/tableAdminManage/columns";

const adminManage = props => {
  return (
    <div>
      <Layout
        userRole="admin"
        selectedKey="adminManagement"
        openKey="management"
      >
        <Search schema="officers" />
        <Table
          schema="officers"
          tableColumns={columns}
          scrollSize={{ width: false, height: window.innerHeight - 310 + "px" }}
        />
      </Layout>
    </div>
  );
};
export default adminManage;
