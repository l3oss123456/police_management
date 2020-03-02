//@flow
import React, { useState } from "react";
import { Layout, Icon, Dropdown, Button, Popconfirm } from "antd";
import { withRouter, Redirect } from "react-router-dom";
import styled from "styled-components";
import * as R from "ramda";
import { clearItem } from "../../core/storage/index";
import { getItemLocalStorage } from "../../core/storage/index";

type Props = {
  isCollap: Boolean,
  setIsCollap: Any
};

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

const HeaderLayout = (props: Props) => {
  const { isCollap, setIsCollap } = props;
  const [isLogout, setIsLogout] = useState(false);

  const dropdownMenu = (
    <div>
      <Popconfirm
        title="Sure to exit ?"
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
