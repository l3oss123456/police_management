import React from "react";
import { Layout } from "antd";
import Header from "./Header";
import Sider from "./Sider";
import enhance from "./enhance";

const { Content } = Layout;

const MainLayout = props => {
  const {
    userRole,
    children,
    isCollap,
    setIsCollap,
    selectedKey,
    openKey
  } = props;
  return (
    <Layout>
      <Sider
        userRole={userRole}
        isCollap={isCollap}
        selectedKey={selectedKey}
        defaultSelectedKeys={selectedKey}
        openKey={openKey}
      />
      <Layout
        style={{
          // height: "calc(100vh - 64px)",
          height: window.innerHeight,
          // overflowX: "hidden",
          // overflowY: "auto",
          position: "relative",
          backgroundColor: "#F1F2F6"
        }}
      >
        <Header isCollap={isCollap} setIsCollap={setIsCollap} />
        <Content
          style={{
            // margin: "24px 16px",
            // padding: 24,
            // background: "#fff",
            // minHeight: 280
            // height: "calc(100vh - 64px)",
            margin: "30px 100px 0px 34px",
            overflowX: "hidden",
            overflowY: "auto",
            position: "relative"
            // backgroundColor: "#F1F2F6"
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default enhance(MainLayout);
