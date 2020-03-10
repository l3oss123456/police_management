import React from "react";
import Layout from "../../components/Layout/index";
import Search from "../../components/Search/index";
import Table from "../../components/ListingTable/index";
import columns from "./components/tableUserManage/index";

const userManage = props => {
  return (
    <div>
      <Layout
        userRole="admin"
        selectedKey="userManagement"
        openKey="management"
      >
        <Search
          externalUrl="http://localhost:3000/management/admin"
          addBtnText="ผู้รับยา"
          isAddBtn
        />
        <Table
          schema="users"
          path="management/user"
          tableColumns={columns}
          scrollSize={{
            width: window.innerWidth - 310 + "px",
            height: window.innerHeight - 310 + "px"
          }}
          isPrint
          isUserManagePage
        />
      </Layout>
    </div>
  );
};
export default userManage;
