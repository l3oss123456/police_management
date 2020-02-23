const menu = [
  {
    key: "dashboard",
    name: "Dashboard",
    iconType: "area-chart",
    link: "/dashboard",
    userRole: "admin"
  },
  {
    key: "2",
    name: "admin menu 2",
    iconType: "user",
    link: "/",
    userRole: "admin"
  },
  {
    subMenuKey: "management",
    titleName: "Management",
    iconType: "snippets",
    userRole: "admin",
    menu: [
      {
        key: "adminManagement",
        name: "Admin Manage",
        link: "/adminManage",
        iconType: "user"
      },
      {
        key: "userManagement",
        name: "User Manage",
        link: "/userManage",
        iconType: "user"
      }
    ]
  },
  {
    key: "1",
    name: "user menu 1",
    iconType: "user",
    userRole: "user"
  }
];
export default menu;
