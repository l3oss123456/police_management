// @flow
import React from "react";
import { Card } from "antd";
import styled from "styled-components";
import FormLogin from "./components/FormLogin/index";
import enchance from "./enchance";
import bg from "../../core/images/bg.jpg";
import { Redirect } from "react-router-dom";

type Props = {
  handleSubmit: Any,
  hasErrors: Any,
  handleChangeInput: Any,
  respStatus: Boolean,
  isLogin: Boolean
};

const StyledBackgroundLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImgLayout = styled.img`
  height: 100vh;
  width: 100vw;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledCard = styled(Card)`
  height: 380px;
  width: 380px;

  border-radius: 20px;
  padding: 10px;
  position: absolute;

  display: flex;
  justify-content: center;
`;

const StyledHeader = styled.div`
  font-size: 36px;
  font-weight: bold;

  width: 200px;
`;

const StyledLogin = styled.div`
  padding-top: 40px;
`;

const Login = (props: Props) => {
  const {
    handleSubmit,
    hasErrors,
    handleChangeInput,
    respStatus,
    isLogin
  } = props;
  return (
    <StyledBackgroundLayout>
      {isLogin === true && <Redirect to={{ pathname: "/management/admin" }} />}
      <StyledImgLayout src={bg} />
      <StyledCard>
        <StyledHeader>Sign in</StyledHeader>
        <StyledLogin>
          <FormLogin
            handleSubmit={handleSubmit}
            hasErrors={hasErrors}
            handleChangeInput={handleChangeInput}
            respStatus={respStatus}
          />
        </StyledLogin>
      </StyledCard>
      {/* <ContainerCard></ContainerCard>
        
           <ContainerIcon>Sign in</ContainerIcon>
          <LoginForm>
            <FormLogin
              handleSubmit={handleSubmit}
              hasErrors={hasErrors}
              handleChangeInput={handleChangeInput}
              respStatus={respStatus}
            />
          </LoginForm>
       
      </ContainerCard> */}
    </StyledBackgroundLayout>
  );
};
export default enchance(Login);
