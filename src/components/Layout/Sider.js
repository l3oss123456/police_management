//@flow
import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import menu from "../../utils/siderMenu";
import SubMenu from "antd/lib/menu/SubMenu";
import policeIcon from "../../core/images/policeIcon.PNG";
import Theme from "../../core/theme/index";
import { StyledImgDiv, StyledImgLayout } from "./styled";
const { Sider } = Layout;

type Props = {
  userRole: String,
  isCollap: Boolean,
  selectedKey: String,
  openKey: String
};

const SiderLayout = (props: Props) => {
  const { userRole, isCollap, selectedKey, openKey } = props;
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={isCollap}
      breakpoint="lg"
      collapsedWidth="80"
      style={{ background: Theme.colors.blackRussian }}
    >
      <StyledImgDiv>
        {!isCollap && <StyledImgLayout src={policeIcon} />}
      </StyledImgDiv>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={selectedKey}
        defaultOpenKeys={openKey}
      >
        {menu.map(menuItem => {
          return (
            menuItem.userRole === userRole &&
            (menuItem.subMenuKey ? (
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
            ))
          );
        })}
      </Menu>
    </Sider>
  );
};
export default SiderLayout;
