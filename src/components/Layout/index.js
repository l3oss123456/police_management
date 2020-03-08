//@flow
import React from "react";
import { Layout } from "antd";
import Header from "./Header";
import Sider from "./Sider";
import enhance from "./enhance";
import Theme from "../../core/theme/index";

type Props = {
  userRole: String,
  children: Any,
  isCollap: Boolean,
  setIsCollap: Any,
  selectedKey: String,
  openKey: String
};

const { Content } = Layout;

const MainLayout = (props: Props) => {
  const {
    userRole,
    children,
    isCollap,
    setIsCollap,
    selectedKey,
    openKey
  } = props;
  const { midnightEx } = Theme.colors;
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
          height: window.innerHeight,
          position: "relative",
          backgroundColor: midnightEx
        }}
      >
        <Header isCollap={isCollap} setIsCollap={setIsCollap} />
        <Content
          style={{
            margin: "30px 100px 0px 34px",
            overflowX: "hidden",
            overflowY: "auto",
            position: "relative"
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default enhance(MainLayout);
