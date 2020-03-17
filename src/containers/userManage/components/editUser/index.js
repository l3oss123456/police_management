import React from "react";
import Layout from "../../../../components/Layout/index";
import FormUser from "../formUser/index";

const editUsr = props => {
  return (
    <Layout userRole="admin" selectedKey="userManagement" openKey="management">
      <FormUser />
    </Layout>
  );
};
export default editUsr;
