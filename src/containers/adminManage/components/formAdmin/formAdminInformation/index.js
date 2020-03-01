import React from "react";
import { Form, Input, Row, Col } from "antd";
import * as R from "ramda";
import styled from "styled-components";
import Select from "../../../../../components/Select/index";

const SectionHeader = styled.h3`
  background: #fafafa;
  border-bottom: 1px solid #ededed;
  padding: 15px 20px;
`;
const SectionContent = styled.div`
  padding: 20px;
`;
const StyledWarining = styled.div`
  color: red;
  font-size: 13px;
`;

const formAdminInformation = props => {
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
            <Form.Item style={{ width: "90%" }}>
              {getFieldDecorator("firstName", {
                initialValue: firstName,
                rules: [
                  {
                    required: true,
                    message: "Please Input First Name"
                  }
                ]
              })(<Input type="text" />)}
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={1} md={3} style={{ paddingTop: "8px" }}>
            นามสกุล :
          </Col>
          <Col span={16} md={18}>
            <Form.Item style={{ width: "90%" }}>
              {getFieldDecorator("lastName", {
                initialValue: lastName,
                rules: [
                  {
                    required: true,
                    message: "Please Input Last Name"
                  }
                ]
              })(<Input type="text" />)}
            </Form.Item>
          </Col>
        </Row>

        {username === "" && (
          <Row>
            <Col span={1} md={3} style={{ paddingTop: "8px" }}>
              ชื่อผู้ใช้งาน :
            </Col>
            <Col span={16} md={18}>
              <Form.Item style={{ width: "90%" }}>
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
                      <StyledWarining>
                        ชื่อผู้ใช้งานนี้มีอยู่ในระบบแล้ว !
                      </StyledWarining>
                    </div>
                  ) : (
                    <Input type="text" />
                  )
                )}
              </Form.Item>
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
                    message: "Please Input Lasy Name"
                  }
                ]
              })(
                respStatus === 400 ? (
                  <div>
                    <Input type="text" />
                    <StyledWarining>
                      รหัสผ่านนี้มีอยู่ในระบบแล้ว !
                    </StyledWarining>
                  </div>
                ) : (
                  <Input type="text" />
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
            สิทธิ :
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
