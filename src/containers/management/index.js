import React from "react";
import enchance from "./enchance";
import Layout from "../../components/Layout/index";
import Search from "../../components/Search/index";
import Table from "../../components/ListingTable/index";

const Management = props => {
  // const { searchValue } = props;
  return (
    <div>
      <Layout userRole="admin" selectedKey="2">
        <Search />
        <Table
          scrollSize={{ width: false, height: window.innerHeight - 310 + "px" }}
        />
      </Layout>
      {/* <input type="text" onChange={e => searchValue(e.target.value)} /> */}
    </div>
  );
};
export default enchance(Management);
