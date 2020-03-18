import React from "react";
import { Form, DatePicker } from "antd";
import Select from "../../../../../../components/Select/index";
import moment from "moment";
import {
  ContainerUserInformation,
  SectionUserInformation,
  ContainerTopic,
  SectionHeader,
  SectionContent,
  InputStyled
} from "../../../Styled/index";

const FormUserInformation = props => {
  const { form, queryData, selectedPrefix, setSelectedPrefix } = props;
  const { getFieldDecorator } = form;
  const dateFormat = "YYYY-MM-DD";
  return (
    <div>
      <SectionHeader>ข้อมูลผู้รับยา</SectionHeader>
      <SectionContent>
        <ContainerUserInformation>
          <SectionUserInformation>
            <ContainerTopic>ข้าพเจ้า : </ContainerTopic>
            <Select
              allData={["นาย", "นางสาว"]}
              defaultData={selectedPrefix}
              selected={setSelectedPrefix}
              width="130px"
            ></Select>
          </SectionUserInformation>
          <SectionUserInformation>
            <div>
              <Form.Item>
                {getFieldDecorator("userFirstName", {
                  initialValue: queryData.firstName,
                  rules: [{ required: true, message: "กรุณาใส่ชื่อ !" }]
                })(<InputStyled autoFocus placeholder="ชื่อ" />)}
              </Form.Item>
            </div>
            <div>
              <Form.Item>
                {getFieldDecorator("userLastName", {
                  initialValue: queryData.lastName,
                  rules: [{ required: true, message: "กรุณาใส่นามสกุล !" }]
                })(<InputStyled placeholder="นามสกุล" />)}
              </Form.Item>
            </div>
          </SectionUserInformation>
        </ContainerUserInformation>

        <ContainerUserInformation>
          <SectionUserInformation>
            <ContainerTopic marginLeft="45px">วันเกิด : </ContainerTopic>
            <div style={{ marginLeft: "100px" }}>
              <DatePicker
                defaultValue={moment(
                  moment(queryData.birthday).format(dateFormat)
                )}
                format={dateFormat}
                onChange={value => props.setBirthDate(value)}
              />
            </div>
          </SectionUserInformation>
          <SectionUserInformation>
            <ContainerTopic marginLeft="40px">
              หมายเลขบัตรประชาชน :
            </ContainerTopic>
            <div>
              <Form.Item>
                {getFieldDecorator("userIdCardNo", {
                  initialValue: queryData.idCardNo,
                  rules: [
                    { required: true, message: "กรุณาใส่เลขบัตรประชาชน !" }
                  ]
                })(<InputStyled placeholder="เลขบัตรประชาชน" maxLength="13" />)}
              </Form.Item>
            </div>
          </SectionUserInformation>
        </ContainerUserInformation>
        <ContainerUserInformation>
          <SectionUserInformation>
            <ContainerTopic marginLeft="68px">อยู่บ้านเลขที่ :</ContainerTopic>
            <div style={{ marginLeft: "110px" }}>
              <Form.Item>
                {getFieldDecorator("userHouseNo", {
                  initialValue: queryData.houseNo,
                  rules: [{ required: true, message: "กรุณาใส่บ้านเลขที่ !" }]
                })(<InputStyled placeholder="บ้านเลขที่" />)}
              </Form.Item>
            </div>
          </SectionUserInformation>
          <SectionUserInformation>
            <ContainerTopic marginLeft="120px">ตรอก/ซอย :</ContainerTopic>
            <div style={{ marginLeft: "3px" }}>
              <Form.Item>
                {getFieldDecorator("userAlley", {
                  initialValue: queryData.alley,
                  rules: [{ required: true, message: "กรุณาใส่ตรอก/ซอย !" }]
                })(<InputStyled placeholder="ตรอก/ซอย" />)}
              </Form.Item>
            </div>
          </SectionUserInformation>
        </ContainerUserInformation>
        <ContainerUserInformation>
          <SectionUserInformation>
            <ContainerTopic marginLeft="72px">ถนน :</ContainerTopic>
            <div style={{ marginLeft: "165px" }}>
              <Form.Item>
                {getFieldDecorator("userRoad", {
                  initialValue: queryData.road
                })(<InputStyled placeholder="ถนน" />)}
              </Form.Item>
            </div>
          </SectionUserInformation>
          <SectionUserInformation>
            <ContainerTopic marginLeft="150px">ตำบล :</ContainerTopic>
            <div>
              <Form.Item>
                {getFieldDecorator("userSubArea", {
                  initialValue: queryData.subArea,
                  rules: [{ required: true, message: "กรุณาใส่ตำบล !" }]
                })(<InputStyled placeholder="ตำบล" />)}
              </Form.Item>
            </div>
          </SectionUserInformation>
        </ContainerUserInformation>
        <ContainerUserInformation>
          <SectionUserInformation>
            <ContainerTopic marginLeft="68px">อำเภอ :</ContainerTopic>
            <div style={{ marginLeft: "150px" }}>
              <Form.Item>
                {getFieldDecorator("userArea", {
                  initialValue: queryData.area,
                  rules: [{ required: true, message: "กรุณาใส่อำเภอ !" }]
                })(<InputStyled placeholder="อำเภอ" />)}
              </Form.Item>
            </div>
          </SectionUserInformation>
          <SectionUserInformation>
            <ContainerTopic marginLeft="145px">จังหวัด :</ContainerTopic>
            <div>
              <Form.Item>
                {getFieldDecorator("userProvince", {
                  initialValue: queryData.province,
                  rules: [{ required: true, message: "กรุณาใส่จังหวัด !" }]
                })(<InputStyled placeholder="จังหวัด" />)}
              </Form.Item>
            </div>
          </SectionUserInformation>
        </ContainerUserInformation>

        <ContainerUserInformation justifyContent="flex-start">
          <SectionUserInformation>
            <ContainerTopic marginLeft="65px">โทร :</ContainerTopic>
            <div style={{ marginLeft: "165px" }}>
              <Form.Item>
                {getFieldDecorator("userMobileNo", {
                  initialValue: queryData.mobileNo,
                  rules: [
                    { required: true, message: "กรุณาใส่หมายเลขโทรศัพท์ !" }
                  ]
                })(<InputStyled placeholder="หมายเลขโทรศัพท์" />)}
              </Form.Item>
            </div>
          </SectionUserInformation>
        </ContainerUserInformation>
      </SectionContent>
    </div>
  );
};
export default FormUserInformation;
