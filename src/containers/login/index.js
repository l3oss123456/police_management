// @flow
import React from "react";
import { Redirect } from "react-router-dom";
import FormLogin from "./components/FormLogin/index";
import enchance from "./enchance";
import policeIcon from "../../core/images/policeIcon.PNG";
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
      {isLogin === true && <Redirect to={{ pathname: "/management/user" }} />}
      <StyledCard>
        <StyledHeader>
          <StyledImgLayout src={policeIcon} />
          <div>
            สำนักงานตำรวจแห่งชาติ
            <br />
            Royal Thai Police
          </div>
        </StyledHeader>
        <StyledLogin>
          <FormLogin
            handleSubmit={handleSubmit}
            hasErrors={hasErrors}
            handleChangeInput={handleChangeInput}
            respStatus={respStatus}
            policeIcon={policeIcon}
          />
        </StyledLogin>
      </StyledCard>
    </StyledBackgroundLayout>
  );
};
export default enchance(Login);
