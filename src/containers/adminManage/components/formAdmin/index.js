//@flow
import React from "react";
import { Form } from "antd";
import * as R from "ramda";
import FormAdminInformation from "./formAdminInformation/index";
import enhance from "./enhance";
import {
  Container,
  Section,
  Title,
  Footer,
  StyledButtonCancel,
  StyledButtonSave,
  ContainerFooterBtn
} from "../Styled/index";

type Props = {
  allPosition: Array,
  allRole: Array,
  selectedPosition: String,
  setSelectedPosition: Any,
  selectedRole: String,
  setSelectedRole: Any,
  queryData: Array,
  form: any,
  history: any,
  insertOfficer: Any,
  editOfficer: Any,
  respStatus: String
};

const formAdmin = (props: Props) => {
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
    editOfficer,
    respStatus
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
            respStatus={respStatus}
          />
        </Section>
      </Container>

      <Footer>
        <ContainerFooterBtn>
          <StyledButtonCancel onClick={() => history.push("/management/admin")}>
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
