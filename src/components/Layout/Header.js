//@flow
import React, { useState } from "react";
import { Layout, Icon, Dropdown, Popconfirm } from "antd";
import { withRouter, Redirect } from "react-router-dom";
import * as R from "ramda";
import { clearItem } from "../../core/storage/index";
import { getItemLocalStorage } from "../../core/storage/index";
import Theme from "../../core/theme/index";
import {
  ContainerHeader,
  ContainerInfo,
  LogoutBtn,
  IconStyled
} from "./styled";

type Props = {
  isCollap: Boolean,
  setIsCollap: Any
};

const { Header } = Layout;

const HeaderLayout = (props: Props) => {
  const { isCollap, setIsCollap } = props;
  const [isLogout, setIsLogout] = useState(false);
  const dropdownMenu = (
    <div>
      <Popconfirm
        title="คุณแน่ใจ ที่จะออกจากระบบ ?"
        okText="Yes"
        cancelText="No"
        onConfirm={() => {
          clearItem();
          setIsLogout(true);
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
  const name = R.pathOr(
    "",
    ["name"],
    JSON.parse(getItemLocalStorage("userInfo"))
  );
  return (
    <>
      {isLogout && (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )}
      <Header
        style={{
          background: Theme.colors.blackRussian,
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
                {name}
                <Icon type="down" style={{ marginLeft: "5px" }} />
              </div>
            </ContainerInfo>
          </Dropdown>
        </ContainerHeader>
      </Header>
    </>
  );
};
export default withRouter(HeaderLayout);
