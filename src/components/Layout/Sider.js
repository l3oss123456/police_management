//@flow
import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import styled from "styled-components";
import menu from "../../utils/siderMenu";
import SubMenu from "antd/lib/menu/SubMenu";
import policeIcon from "../../core/images/policeIcon.PNG";
const { Sider } = Layout;

type Props = {
  userRole: String,
  isCollap: Boolean,
  selectedKey: String,
  openKey: String
};

const StyledImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px 30px 0px;
`;
const StyledImgLayout = styled.img`
  height: 100px;
  width: 100px;
`;

const SiderLayout = (props: Props) => {
  const { userRole, isCollap, selectedKey, openKey } = props;
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={isCollap}
      breakpoint="lg"
      collapsedWidth="80"
    >
      <StyledImgDiv>
        <StyledImgLayout src={policeIcon} />
      </StyledImgDiv>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={selectedKey}
        defaultOpenKeys={openKey}
      >
        {menu.map(menuItem => {
          return menuItem.userRole === userRole ? (
            menuItem.subMenuKey ? (
              <SubMenu
                key={menuItem.subMenuKey}
                title={
                  <span>
                    <Icon type={menuItem.iconType}></Icon>
                    <span>{menuItem.titleName}</span>
                  </span>
                }
              >
                {menuItem.menu.map(subMenu => {
                  return (
                    <Menu.Item key={subMenu.key}>
                      <Link to={subMenu.link}>
                        <Icon type={subMenu.iconType} />
                        <span>{subMenu.name}</span>
                      </Link>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            ) : (
              <Menu.Item key={menuItem.key}>
                <Link to={menuItem.link}>
                  <Icon type={menuItem.iconType} />
                  <span>{menuItem.name}</span>
                </Link>
              </Menu.Item>
            )
          ) : null;
          // return item.userRole === userRole ? (
          // <Menu.Item key={item.key}>
          //   <Icon type={item.iconType} />
          //   <span>{item.name}</span>
          // </Menu.Item>
          // ) : null;

          // if (item.userRole === userRole) {
          //   return (
          //   <Menu.Item key={item.key}>
          //     <Icon type={item.iconType} />
          //     <span>{item.name}</span>
          //   </Menu.Item>
          // );
          // }
          // return "";
        })}
      </Menu>
    </Sider>
  );
};
export default SiderLayout;
