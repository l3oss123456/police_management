import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as R from "ramda";
import { getItemLocalStorage, clearItem } from "../../storage/index";
import displayNotification from "../../../utils/notification";

const renderComponent = props => {
  const { component: Component, allowRole } = props;
  const user = R.path(["name"], JSON.parse(getItemLocalStorage("userInfo")));
  const role = R.path(["role"], JSON.parse(getItemLocalStorage("userInfo")));
  const isAuth = role || user;
  var checkRole = false,
    isCheckRole = false;
  allowRole.map(userRole => {
    return role !== userRole && isCheckRole === false
      ? (checkRole = false)
      : ((checkRole = true), (isCheckRole = true));
  });

  if (isAuth) {
    if (user && !checkRole) {
      displayNotification("error", "คุณไม่มีสิทธิเข้าถึงเว็บไซต์นี้ !");
      clearItem();
      return <Redirect to={{ pathname: "/" }} />;
    } else {
      return <Component {...Component} />;
    }
  }
  if (!isAuth) {
    displayNotification("error", "กรุณา Login ก่อนเข้าเว็บไซต์ !");
    clearItem();
    return <Redirect to="/" />;
  }
};

const GuardRoutes = props => {
  const { exact, path } = props;
  const render = renderComponent(props);
  return <Route exact={exact} path={path} render={() => render} />;
};
export default GuardRoutes;
