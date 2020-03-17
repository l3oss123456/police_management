import React from "react";
import { Input, Form, Icon } from "antd";
import EditingData from "./editableData";

const columnsAgentTable = props => {
  const { form } = props;
  const { getFieldDecorator } = form;
  return [
    {
      render: (text, record, index) => {
        return (
          <Icon
            type="minus-circle-o"
            onClick={() => props.handleDeleteRow(index)}
          />
        );
      }
    },
    {
      title: "คำนำหน้า",
      dataIndex: "prefix",
      editable: true,
      render: (text, record, index) => {
        if (
          props.editingTable.key === index &&
          props.editingTable.columnsName === "prefix" &&
          props.focusEditingTable === true
        ) {
          return (
            <Form.Item>
              {getFieldDecorator("prefix", {
                initialValue: record.prefix,
                rules: [
                  {
                    required: true,
                    message: "กรุณาใส่คำนำหน้า !"
                  }
                ]
              })(
                <Input
                  autoFocus
                  type="text"
                  onChange={e =>
                    props.handleSaveAgentTable(index, "prefix", e.target.value)
                  }
                  onPressEnter={e => props.setFocusEditingTable(false)}
                  onBlur={e => props.setFocusEditingTable(false)}
                  style={{ width: "100px" }}
                />
              )}
            </Form.Item>
          );
        } else {
          return (
            <EditingData
              {...props}
              index={index}
              text={text}
              columnsName="prefix"
            />
          );
        }
      }
    },
    {
      title: "ชื่อ",
      dataIndex: "firstName",
      editable: true,
      render: (text, record, index) => {
        if (
          props.editingTable.key === index &&
          props.editingTable.columnsName === "firstName" &&
          props.focusEditingTable === true
        ) {
          return (
            <Form.Item>
              {getFieldDecorator("firstName", {
                initialValue: record.firstName,
                rules: [
                  {
                    required: true,
                    message: "กรุณาใส่ชื่อ !"
                  }
                ]
              })(
                <Input
                  autoFocus
                  type="text"
                  onChange={e =>
                    props.handleSaveAgentTable(
                      index,
                      "firstName",
                      e.target.value
                    )
                  }
                  onPressEnter={e => props.setFocusEditingTable(false)}
                  onBlur={e => props.setFocusEditingTable(false)}
                  style={{ width: "100px" }}
                />
              )}
            </Form.Item>
          );
        } else {
          return (
            <EditingData
              {...props}
              index={index}
              text={text}
              columnsName="firstName"
            />
          );
        }
      }
    },
    {
      title: "นามสกุล",
      dataIndex: "lastName",
      editable: true,
      render: (text, record, index) => {
        if (
          props.editingTable.key === index &&
          props.editingTable.columnsName === "lastName" &&
          props.focusEditingTable === true
        ) {
          return (
            <Form.Item>
              {getFieldDecorator("lastName", {
                initialValue: record.lastName,
                rules: [
                  {
                    required: true,
                    message: "กรุณาใส่นามสกุล !"
                  }
                ]
              })(
                <Input
                  autoFocus
                  type="text"
                  onChange={e =>
                    props.handleSaveAgentTable(
                      index,
                      "lastName",
                      e.target.value
                    )
                  }
                  onPressEnter={e => props.setFocusEditingTable(false)}
                  onBlur={e => props.setFocusEditingTable(false)}
                  style={{ width: "100px" }}
                />
              )}
            </Form.Item>
          );
        } else {
          return (
            <EditingData
              {...props}
              index={index}
              text={text}
              columnsName="lastName"
            />
          );
        }
      }
    },
    {
      title: "วันเกิด",
      dataIndex: "birthday",
      editable: true,
      render: (text, record, index) => {
        if (
          props.editingTable.key === index &&
          props.editingTable.columnsName === "birthday" &&
          props.focusEditingTable === true
        ) {
          return (
            <Form.Item>
              {getFieldDecorator("birthday", {
                initialValue: record.birthday,
                rules: [
                  {
                    required: true,
                    message: "กรุณาใส่วันเกิด !"
                  }
                ]
              })(
                <Input
                  autoFocus
                  type="text"
                  onChange={e =>
                    props.handleSaveAgentTable(
                      index,
                      "birthday",
                      e.target.value
                    )
                  }
                  onPressEnter={e => props.setFocusEditingTable(false)}
                  onBlur={e => props.setFocusEditingTable(false)}
                  style={{ width: "100px" }}
                />
              )}
            </Form.Item>
          );
        } else {
          return (
            <EditingData
              {...props}
              index={index}
              text={text}
              columnsName="birthday"
            />
          );
        }
      }
    },
    {
      title: "บัตรประชาชน",
      dataIndex: "idCardNo",
      editable: true,
      render: (text, record, index) => {
        if (
          props.editingTable.key === index &&
          props.editingTable.columnsName === "idCardNo" &&
          props.focusEditingTable === true
        ) {
          return (
            <Form.Item>
              {getFieldDecorator("idCardNo", {
                initialValue: record.idCardNo,
                rules: [
                  {
                    required: true,
                    message: "กรุณาใส่หมายเลขการ์ด !"
                  }
                ]
              })(
                <Input
                  autoFocus
                  type="text"
                  onChange={e =>
                    props.handleSaveAgentTable(
                      index,
                      "idCardNo",
                      e.target.value
                    )
                  }
                  onPressEnter={e => props.setFocusEditingTable(false)}
                  onBlur={e => props.setFocusEditingTable(false)}
                  style={{ width: "100px" }}
                />
              )}
            </Form.Item>
          );
        } else {
          return (
            <EditingData
              {...props}
              index={index}
              text={text}
              columnsName="idCardNo"
            />
          );
        }
      }
    },
    {
      title: "บ้านเลขที่",
      dataIndex: "houseNo",
      editable: true,
      render: (text, record, index) => {
        if (
          props.editingTable.key === index &&
          props.editingTable.columnsName === "houseNo" &&
          props.focusEditingTable === true
        ) {
          return (
            <Form.Item>
              {getFieldDecorator("houseNo", {
                initialValue: record.houseNo,
                rules: [
                  {
                    required: true,
                    message: "กรุณาใส่บ้านเลขที่ !"
                  }
                ]
              })(
                <Input
                  autoFocus
                  type="text"
                  onChange={e =>
                    props.handleSaveAgentTable(index, "houseNo", e.target.value)
                  }
                  onPressEnter={e => props.setFocusEditingTable(false)}
                  onBlur={e => props.setFocusEditingTable(false)}
                  style={{ width: "100px" }}
                />
              )}
            </Form.Item>
          );
        } else {
          return (
            <EditingData
              {...props}
              index={index}
              text={text}
              columnsName="houseNo"
            />
          );
        }
      }
    },
    {
      title: "ซอย",
      dataIndex: "alley",
      editable: true,
      render: (text, record, index) => {
        if (
          props.editingTable.key === index &&
          props.editingTable.columnsName === "alley" &&
          props.focusEditingTable === true
        ) {
          return (
            <Form.Item>
              {getFieldDecorator("alley", {
                initialValue: record.alley,
                rules: [
                  {
                    required: true,
                    message: "กรุณาใส่ซอย !"
                  }
                ]
              })(
                <Input
                  autoFocus
                  type="text"
                  onChange={e =>
                    props.handleSaveAgentTable(index, "alley", e.target.value)
                  }
                  onPressEnter={e => props.setFocusEditingTable(false)}
                  onBlur={e => props.setFocusEditingTable(false)}
                  style={{ width: "100px" }}
                />
              )}
            </Form.Item>
          );
        } else {
          return (
            <EditingData
              {...props}
              index={index}
              text={text}
              columnsName="alley"
            />
          );
        }
      }
    },
    {
      title: "ตำบล",
      dataIndex: "subArea",
      editable: true,
      render: (text, record, index) => {
        if (
          props.editingTable.key === index &&
          props.editingTable.columnsName === "subArea" &&
          props.focusEditingTable === true
        ) {
          return (
            <Form.Item>
              {getFieldDecorator("subArea", {
                initialValue: record.subArea,
                rules: [
                  {
                    required: true,
                    message: "กรุณาใส่ตำบล !"
                  }
                ]
              })(
                <Input
                  autoFocus
                  type="text"
                  onChange={e =>
                    props.handleSaveAgentTable(index, "subArea", e.target.value)
                  }
                  onPressEnter={e => props.setFocusEditingTable(false)}
                  onBlur={e => props.setFocusEditingTable(false)}
                  style={{ width: "100px" }}
                />
              )}
            </Form.Item>
          );
        } else {
          return (
            <EditingData
              {...props}
              index={index}
              text={text}
              columnsName="subArea"
            />
          );
        }
      }
    },
    {
      title: "อำเภอ",
      dataIndex: "area",
      editable: true,
      render: (text, record, index) => {
        if (
          props.editingTable.key === index &&
          props.editingTable.columnsName === "area" &&
          props.focusEditingTable === true
        ) {
          return (
            <Form.Item>
              {getFieldDecorator("area", {
                initialValue: record.area,
                rules: [
                  {
                    required: true,
                    message: "กรุณาใส่อำเภอ !"
                  }
                ]
              })(
                <Input
                  autoFocus
                  type="text"
                  onChange={e =>
                    props.handleSaveAgentTable(index, "area", e.target.value)
                  }
                  onPressEnter={e => props.setFocusEditingTable(false)}
                  onBlur={e => props.setFocusEditingTable(false)}
                  style={{ width: "100px" }}
                />
              )}
            </Form.Item>
          );
        } else {
          return (
            <EditingData
              {...props}
              index={index}
              text={text}
              columnsName="area"
            />
          );
        }
      }
    },
    {
      title: "จังหวัด",
      dataIndex: "province",
      editable: true,
      render: (text, record, index) => {
        if (
          props.editingTable.key === index &&
          props.editingTable.columnsName === "province" &&
          props.focusEditingTable === true
        ) {
          return (
            <Form.Item>
              {getFieldDecorator("province", {
                initialValue: record.province,
                rules: [
                  {
                    required: true,
                    message: "กรุณาใส่จังหวัด !"
                  }
                ]
              })(
                <Input
                  autoFocus
                  type="text"
                  onChange={e =>
                    props.handleSaveAgentTable(
                      index,
                      "province",
                      e.target.value
                    )
                  }
                  onPressEnter={e => props.setFocusEditingTable(false)}
                  onBlur={e => props.setFocusEditingTable(false)}
                  style={{ width: "100px" }}
                />
              )}
            </Form.Item>
          );
        } else {
          return (
            <EditingData
              {...props}
              index={index}
              text={text}
              columnsName="province"
            />
          );
        }
      }
    },
    {
      title: "โทร",
      dataIndex: "mobileNo",
      editable: true,
      render: (text, record, index) => {
        if (
          props.editingTable.key === index &&
          props.editingTable.columnsName === "mobileNo" &&
          props.focusEditingTable === true
        ) {
          return (
            <Form.Item>
              {getFieldDecorator("mobileNo", {
                initialValue: record.mobileNo,
                rules: [
                  {
                    required: true,
                    message: "กรุณาใส่เบอร์โทรศัพท์ !"
                  }
                ]
              })(
                <Input
                  autoFocus
                  type="text"
                  onChange={e =>
                    props.handleSaveAgentTable(
                      index,
                      "mobileNo",
                      e.target.value
                    )
                  }
                  onPressEnter={e => props.setFocusEditingTable(false)}
                  onBlur={e => props.setFocusEditingTable(false)}
                  style={{ width: "100px" }}
                />
              )}
            </Form.Item>
          );
        } else {
          return (
            <EditingData
              {...props}
              index={index}
              text={text}
              columnsName="mobileNo"
            />
          );
        }
      }
    }
  ];
};

export default columnsAgentTable;
