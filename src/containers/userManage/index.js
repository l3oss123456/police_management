import React from "react";
import Layout from "../../components/Layout/index";
import Search from "../../components/Search/index";
import Table from "../../components/ListingTable/index";
import columns from "./components/tableUserManage/index";

const userManage = (props) => {
  return (
    <div>
      <Layout
        userRole="admin"
        selectedKey="userManagement"
        openKey="management"
      >
        <Search
          externalUrl="https://police-frontend.netlify.com/"
          addBtnText="ผู้รับยา"
          schema="users"
          isAddBtn
          searchFromCard
        />
        <Table
          schema="users"
          path="management/user"
          tableColumns={columns}
          scrollSize={{
            width: window.innerWidth - 310 + "px",
            height: window.innerHeight - 310 + "px",
          }}
          isPrint
        />
      </Layout>
    </div>
  );
};
export default userManage;
