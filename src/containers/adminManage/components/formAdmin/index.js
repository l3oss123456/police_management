import React from "react";
import Layout from "../../../../components/Layout/index";
import styled from "styled-components";

const ContainerSection = styled.div`
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const formAdmin = props => {
  return (
    <div>
      <Layout
        userRole="admin"
        selectedKey="adminManagement"
        openKey="management"
      >
        <ContainerSection>
          firstName: <input type="text"></input>
        </ContainerSection>
      </Layout>
    </div>
  );
};
export default formAdmin;
