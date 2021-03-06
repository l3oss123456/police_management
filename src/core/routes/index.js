import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GuardRoutes from "./guardRoutes/index";
import Login from "../../containers/login/index";
import Dashboard from "../../containers/dashboard/index";
import adminManage from "../../containers/adminManage/index";
import addAdmin from "../../containers/adminManage/components/addAdmin/index";
import editAdmin from "../../containers/adminManage/components/editAdmin/index";
import userManage from "../../containers/userManage/index";
import editUser from "../../containers/userManage/components/editUser/index";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <GuardRoutes
          exact
          path="/dashboard"
          component={Dashboard}
          allowRole={["แอดมิน", "ผู้แก้ไข", "ผู้อ่าน"]}
        />
        <GuardRoutes
          exact
          path="/management/admin"
          component={adminManage}
          allowRole={["แอดมิน", "ผู้แก้ไข", "ผู้อ่าน"]}
        />
        <GuardRoutes
          exact
          path="/management/admin/create"
          component={addAdmin}
          // allowRole="admin"
          allowRole={["แอดมิน", "ผู้แก้ไข", "ผู้อ่าน"]}
        />
        <GuardRoutes
          exact
          path="/management/admin/:id/edit"
          component={editAdmin}
          allowRole={["แอดมิน", "ผู้แก้ไข", "ผู้อ่าน"]}
        />
        <GuardRoutes
          exact
          path="/management/user"
          component={userManage}
          allowRole={["แอดมิน", "ผู้แก้ไข", "ผู้อ่าน"]}
        />
        <GuardRoutes
          exact
          path="/management/user/:id/edit"
          component={editUser}
          allowRole={["แอดมิน", "ผู้แก้ไข", "ผู้อ่าน"]}
        />
      </Switch>
    </Router>
  );
};
export default Routes;
