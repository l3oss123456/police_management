import React from "react";
import { Layout, Icon, Dropdown, Button, Popconfirm } from "antd";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { clearItem } from "../../core/storage/index";

const { Header } = Layout;
const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 35px;
  margin-right: 40px;
`;
const ContainerInfo = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 50px;
`;
const LogoutBtn = styled(Button)`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;
const IconStyled = styled(Icon)`
  font-size: ${props => (props.width: "")};
  margin-right: ${props => (props.marginRight: "")};
`;

const dropdownMenu = (
  <div>
    <Popconfirm
      title="Sure to exit ?"
      okText="Yes"
      cancelText="No"
      onConfirm={() => {
        clearItem();
        return <Redirect to={{ pathname: "/Login" }} />;
      }}
    >
      <LogoutBtn>
        <div>
          <Icon type="logout" />
        </div>
        <div>Log out</div>
      </LogoutBtn>
    </Popconfirm>
  </div>
);

const HeaderLayout = props => {
  const { isCollap, setIsCollap } = props;
  return (
    <Header
      style={{
        background: "#fff",
        padding: 0
      }}
    >
      <ContainerHeader>
        <div>
          <IconStyled
            type={isCollap ? "menu-unfold" : "menu-fold"}
            onClick={e => setIsCollap(!isCollap)}
            width="25px"
          />
        </div>
        <Dropdown overlay={dropdownMenu}>
          <ContainerInfo>
            <div>
              <IconStyled type="user" marginRight="5px" width="25px" />
            </div>
            <div>
              สุภสร อุดมพันธ์
              <Icon type="down" style={{ marginLeft: "5px" }} />
            </div>
          </ContainerInfo>
        </Dropdown>
      </ContainerHeader>
    </Header>
  );
};
export default HeaderLayout;
