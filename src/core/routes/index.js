import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GuardRoutes from "./guardRoutes/index";
import Login from "../../containers/login/index";
// import Management from "../../containers/management/index";
import Dashboard from "../../containers/dashboard/index";
import adminManage from "../../containers/adminManage/index";
import addAdmin from "../../containers/adminManage/components/addAdmin/index";
import editAdmin from "../../containers/adminManage/components/editAdmin/index";
import userManage from "../../containers/userManage/index";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Login" component={Login}></Route>
        {/* <Route exact path="/" component={Management}></Route> */}
        {/* <GuardRoutes exact path="/" component={Management} type="admin" /> */}
        <GuardRoutes
          exact
          path="/dashboard"
          component={Dashboard}
          type="admin"
        />
        <GuardRoutes exact path="/" component={adminManage} type="admin" />
        <GuardRoutes
          exact
          path="/officers/create"
          component={addAdmin}
          type="admin"
        />
        <GuardRoutes
          exact
          path="/officers/:_id/edit"
          component={editAdmin}
          type="admin"
        />
        <GuardRoutes
          exact
          path="/userManage"
          component={userManage}
          type="admin"
        />
      </Switch>
    </Router>
  );
};
export default Routes;
