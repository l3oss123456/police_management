import React from "react";
import { Form } from "antd";
import * as R from "ramda";
import FormUserInformation from "./components/formUserInformation/index";
import FormAgent from "./components/formAgent/index";
import enhance from "./enhance";
import {
  Container,
  Title,
  Section,
  Footer,
  ContainerFooterBtn,
  StyledButtonCancel,
  StyledButtonSave
} from "../Styled/index";

const formUser = props => {
  const {
    history,
    form,
    agent,
    queryData,
    selectedPrefix,
    setSelectedPrefix,
    editUser,
    birthDate,
    setBirthDate
  } = props;
  return (
    <div>
      <Container>
        <Title>ข้อมูลผู้รับยา /</Title>
        <Section>
          <FormUserInformation
            form={form}
            queryData={queryData}
            selectedPrefix={selectedPrefix}
            setSelectedPrefix={setSelectedPrefix}
            birthDate={birthDate}
            setBirthDate={setBirthDate}
          />
        </Section>
      </Container>

      {!R.isEmpty(agent) && (
        <Container>
          <Section>
            <FormAgent {...props} />
          </Section>
        </Container>
      )}

      <Footer>
        <ContainerFooterBtn>
          <StyledButtonCancel onClick={() => history.push("/management/user")}>
            ยกเลิก
          </StyledButtonCancel>
          <StyledButtonSave onClick={e => editUser(e, form)}>
            บันทึก
          </StyledButtonSave>
        </ContainerFooterBtn>
      </Footer>
    </div>
  );
};

export default enhance(Form.create()(formUser));
