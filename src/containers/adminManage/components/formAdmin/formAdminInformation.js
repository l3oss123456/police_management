//@flow
import React from "react";
import { Form, Input, Row, Col } from "antd";
import * as R from "ramda";
import Select from "../../../../components/Select/index";
import {
  SectionHeader,
  SectionContent,
  StyledWarning,
  StyledFormItem
} from "../Styled/index";

type Props = {
  form: Any,
  position: Array,
  role: Array,
  setSelectedPosition: Any,
  selectedPosition: String,
  setSelectedRole: Any,
  selectedRole: String,
  queryData: Array,
  respStatus: String
};

const formAdminInformation = (props: Props) => {
  const {
    form,
    position,
    role,
    setSelectedPosition,
    selectedPosition,
    setSelectedRole,
    selectedRole,
    queryData,
    respStatus
  } = props;
  const { getFieldDecorator } = form;
  const firstName = R.pathOr("", ["firstName"], queryData);
  const lastName = R.pathOr("", ["lastName"], queryData);
  const username = R.pathOr("", ["username"], queryData);
  const password = R.pathOr("", ["password"], queryData);
  return (
    <div>
      <SectionHeader>ข้อมูลพนักงาน</SectionHeader>
      <SectionContent>
        <Row>
          <Col span={1} md={3} style={{ paddingTop: "8px" }}>
            ชื่อ :
          </Col>
          <Col span={16} md={18}>
            <StyledFormItem style={{ width: "90%" }}>
              {getFieldDecorator("firstName", {
                initialValue: firstName,
                rules: [
                  {
                    required: true,
                    message: "กรุณาใส่ชื่อ !"
                  }
                ]
              })(<Input type="text" autoFocus />)}
            </StyledFormItem>
          </Col>
        </Row>

        <Row>
          <Col span={1} md={3} style={{ paddingTop: "8px" }}>
            นามสกุล :
          </Col>
          <Col span={16} md={18}>
            <StyledFormItem style={{ width: "90%" }}>
              {getFieldDecorator("lastName", {
                initialValue: lastName,
                rules: [
                  {
                    required: true,
                    message: "กรุณาใส่นามสกุล !"
                  }
                ]
              })(<Input type="text" />)}
            </StyledFormItem>
          </Col>
        </Row>

        {username === "" && (
          <Row>
            <Col span={1} md={3} style={{ paddingTop: "8px" }}>
              ชื่อผู้ใช้งาน :
            </Col>
            <Col span={16} md={18}>
              <StyledFormItem style={{ width: "90%" }}>
                {getFieldDecorator("username", {
                  initialValue: username,
                  rules: [
                    {
                      required: true,
                      message: "Please Input Username"
                    }
                  ]
                })(
                  respStatus === 400 ? (
                    <div>
                      <Input type="text" />
                      <StyledWarning>
                        ชื่อผู้ใช้งานนี้มีอยู่ในระบบแล้ว !
                      </StyledWarning>
                    </div>
                  ) : (
                    <Input type="text" />
                  )
                )}
              </StyledFormItem>
            </Col>
          </Row>
        )}

        <Row>
          <Col span={1} md={3} style={{ paddingTop: "8px" }}>
            รหัสผ่าน :
          </Col>
          <Col span={16} md={18}>
            <Form.Item style={{ width: "90%" }}>
              {getFieldDecorator("password", {
                initialValue: password,
                rules: [
                  {
                    required: true,
                    message: "กรุณาใส่รหัสผ่าน !"
                  }
                ]
              })(
                respStatus === 400 ? (
                  <div>
                    <Input.Password />
                    <StyledWarning>รหัสผ่านนี้มีอยู่ในระบบแล้ว !</StyledWarning>
                  </div>
                ) : (
                  <Input.Password />
                )
              )}
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={1} md={3} style={{ paddingTop: "5px" }}>
            ตำแหน่ง :
          </Col>
          <Col span={16} md={18}>
            <Select
              defaultData={selectedPosition}
              allData={position}
              selected={setSelectedPosition}
              width="200px"
            />
          </Col>
        </Row>

        <Row style={{ paddingTop: "30px" }}>
          <Col span={1} md={3} style={{ paddingTop: "5px" }}>
            สิทธิ์ :
          </Col>
          <Col span={16} md={18}>
            <Select
              defaultData={selectedRole}
              allData={role}
              selected={setSelectedRole}
              width="200px"
            />
          </Col>
        </Row>
      </SectionContent>
    </div>
  );
};
export default formAdminInformation;
