import React from "react";
import { Route } from "react-router-dom";

const GuardRoutes = props => {
  const { exact, path, component } = props;
  return (
    <div>
      <Route exact={exact} path={path} component={component}></Route>
    </div>
  );
};
export default GuardRoutes;
