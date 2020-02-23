import React from "react";
import { Form, Input, Row, Col } from "antd";
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

const formAdminInformation = props => {
  const {
    form,
    position,
    role,
    setSelectedPosition,
    selectedPosition,
    setSelectedRole,
    selectedRole
  } = props;
  const { getFieldDecorator } = form;
  return (
    <div>
      <SectionHeader>Officers Information</SectionHeader>
      <SectionContent>
        <Row>
          <Col span={1} md={3} style={{ paddingTop: "8px" }}>
            First Name :
          </Col>
          <Col span={16} md={18}>
            <Form.Item style={{ width: "90%" }}>
              {getFieldDecorator("firstName", {
                // initialValue: R.path(["voucherName"], props),
                rules: [
                  {
                    required: true,
                    message: "Please Input First Name"
                  }
                ]
              })(
                <Input
                  type="text"
                  //   onChange={e => props.setDisplayVoucherName(e.target.value)}
                />
              )}
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={1} md={3} style={{ paddingTop: "8px" }}>
            Last Name :
          </Col>
          <Col span={16} md={18}>
            <Form.Item style={{ width: "90%" }}>
              {getFieldDecorator("lastName", {
                // initialValue: R.path(["voucherName"], props),
                rules: [
                  {
                    required: true,
                    message: "Please Input Last Name"
                  }
                ]
              })(
                <Input
                  type="text"
                  //   onChange={e => props.setDisplayVoucherName(e.target.value)}
                />
              )}
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={1} md={3} style={{ paddingTop: "8px" }}>
            Username :
          </Col>
          <Col span={16} md={18}>
            <Form.Item style={{ width: "90%" }}>
              {getFieldDecorator("username", {
                // initialValue: R.path(["voucherName"], props),
                rules: [
                  {
                    required: true,
                    message: "Please Input Username"
                  }
                ]
              })(
                <Input
                  type="text"
                  //   onChange={e => props.setDisplayVoucherName(e.target.value)}
                />
              )}
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={1} md={3} style={{ paddingTop: "8px" }}>
            Password :
          </Col>
          <Col span={16} md={18}>
            <Form.Item style={{ width: "90%" }}>
              {getFieldDecorator("password", {
                // initialValue: R.path(["voucherName"], props),
                rules: [
                  {
                    required: true,
                    message: "Please Input Lasy Name"
                  }
                ]
              })(
                <Input
                  type="text"
                  //   onChange={e => props.setDisplayVoucherName(e.target.value)}
                />
              )}
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={1} md={3} style={{ paddingTop: "5px" }}>
            Position :
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
            Role :
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
