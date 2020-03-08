// @flow
import React from "react";
import { Redirect } from "react-router-dom";
import FormLogin from "./components/FormLogin/index";
import enchance from "./enchance";
import bg from "../../core/images/bg.jpg";
import {
  StyledBackgroundLayout,
  StyledImgLayout,
  StyledCard,
  StyledHeader,
  StyledLogin
} from "./components/Styled/index";

type Props = {
  handleSubmit: Any,
  hasErrors: Any,
  handleChangeInput: Any,
  respStatus: Boolean,
  isLogin: Boolean
};

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
    </StyledBackgroundLayout>
  );
};
export default enchance(Login);
