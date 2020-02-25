import React from "react";
import Layout from "../../../../components/Layout/index";
import FormAdmin from "../formAdmin/index";

const addAdmin = props => {
  return (
    <Layout userRole="admin" selectedKey="adminManagement" openKey="management">
      <FormAdmin />
    </Layout>
  );
};
export default addAdmin;
