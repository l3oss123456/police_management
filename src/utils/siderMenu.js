const menu = [
  {
    key: "dashboard",
    name: "แผนภูมิ",
    iconType: "area-chart",
    link: "/dashboard",
    userRole: "admin"
  },
  {
    subMenuKey: "management",
    titleName: "การจัดการข้อมูล",
    iconType: "snippets",
    userRole: "admin",
    menu: [
      {
        key: "adminManagement",
        name: "ข้อมูลผู้ดูแลระบบ",
        link: "/management/admin",
        iconType: "user",
        visibleRole: ["แอดมิน"]
      },
      {
        key: "userManagement",
        name: "ข้อมูลผู้รับยา",
        link: "/management/user",
        iconType: "user",
        visibleRole: ["แอดมิน", "ผู้แก้ไข", "ผู้อ่าน"]
      }
    ]
  }
];
export default menu;
