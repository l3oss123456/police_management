import React from "react";
import * as R from "ramda";

export default [
  {
    title: "เลขบัตร",
    dataIndex: "idCardNo",
    key: "idCardNo"
  },
  {
    title: "ชื่อ",
    dataIndex: "firstName",
    key: "firstName"
  },
  {
    title: "นามสกุล",
    dataIndex: "lastName",
    key: "lastName"
  },
  {
    title: "จังหวัด",
    dataIndex: "province",
    key: "province"
  },
  {
    title: "อำเภอ",
    dataIndex: "area",
    key: "area"
  },
  {
    title: "ตำบล",
    dataIndex: "subArea",
    key: "subArea"
  },
  {
    title: "โทร",
    dataIndex: "mobileNo",
    key: "mobileNo"
  },
  {
    title: "ประเภทการรับยา",
    render: (text, record, index) => {
      return R.isEmpty(record.agent) ? <div>ตนเอง</div> : <div>ผู้อื่น</div>;
    }
  }
];
