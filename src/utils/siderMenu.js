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
    titleName: "การจัดการข้อมูล",
    iconType: "snippets",
    userRole: "admin",
    menu: [
      {
        key: "adminManagement",
        name: "ข้อมูลพนักงาน",
        link: "/management/admin",
        iconType: "user"
      },
      {
        key: "userManagement",
        name: "ข้อมูลผู้รับยา",
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
