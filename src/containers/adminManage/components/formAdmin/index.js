import React from "react";
import { Form, Row, Button } from "antd";
import * as R from "ramda";
import styled from "styled-components";
import FormAdminInformation from "./formAdminInformation/index";
import enhance from "./enhance";

const Container = styled(Row)`
  padding: 20px;
`;
// const Container = styled.div`
//   padding: 20px;
// `;
const Section = styled.div`
  background: #fff;
  margin-bottom: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;
const Title = styled.h2`
  font-size: 20px;
  color: gray;
`;
const Footer = styled.div`
  background: white;
  position: sticky;
  width: 100%;
  height: 64px;
`;
const StyledButtonCancel = styled(Button)`
  width: 130px;
  &:hover {
    border-color: red;
    color: red;
  }
`;
const StyledButtonSave = styled(Button)`
  background: black;
  color: white;
  width: 130px;
  margin-left: 20px;
  margin-right: 20px;
  &:hover {
    background-color: #9c9c9c;
    border-color: #9c9c9c;
    color: white;
  }
`;
const ContainerFooterBtn = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const formAdmin = props => {
  const {
    allPosition,
    allRole,
    selectedPosition,
    setSelectedPosition,
    selectedRole,
    setSelectedRole,
    queryData,
    form,
    history,
    insertOfficer,
    editOfficer
  } = props;
  return (
    <div>
      <Container>
        <Title>พนักงาน /</Title>
        <Section>
          <FormAdminInformation
            form={form}
            position={allPosition}
            role={allRole}
            setSelectedPosition={setSelectedPosition}
            selectedPosition={selectedPosition}
            setSelectedRole={setSelectedRole}
            selectedRole={selectedRole}
            queryData={queryData}
          />
        </Section>
      </Container>

      <Footer>
        <ContainerFooterBtn>
          <StyledButtonCancel onClick={() => history.push("/")}>
            ยกเลิก
          </StyledButtonCancel>
          <StyledButtonSave
            onClick={e =>
              R.isEmpty(queryData)
                ? insertOfficer(e, form)
                : editOfficer(e, form)
            }
          >
            บันทึก
          </StyledButtonSave>
        </ContainerFooterBtn>
      </Footer>
    </div>
  );
};
export default enhance(Form.create()(formAdmin));
