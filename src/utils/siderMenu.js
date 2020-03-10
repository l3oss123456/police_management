const menu = [
  {
    key: "dashboard",
    name: "Dashboard",
    iconType: "area-chart",
    link: "/dashboard",
    userRole: "admin22"
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
        link: "/management/admin",
        iconType: "user"
      },
      {
        key: "userManagement",
        name: "User Manage",
        link: "/management/user",
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
