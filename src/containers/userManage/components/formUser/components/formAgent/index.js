import React from "react";
import { Table, Button } from "antd";
import columns from "./columnsAgentTable";
import {
  ScrollStyled,
  SectionHeader,
  SectionContent
} from "../../../Styled/index";

const FormAgent = props => {
  const { agent, handleAddRow } = props;
  return (
    <div>
      <SectionHeader>ข้อมูลตัวแทนผู้รับยา</SectionHeader>
      <SectionContent>
        <Button
          onClick={() => handleAddRow()}
          type="primary"
          style={{
            margin: "0px 0px 5px 15px"
          }}
        >
          เพื่มตัวแทนผู้รับยา
        </Button>

        <ScrollStyled width={window.innerWidth - 410 + "px"}>
          <Table
            dataSource={agent}
            columns={columns(props)}
            pagination={false}
          />
        </ScrollStyled>
      </SectionContent>
    </div>
  );
};
export default FormAgent;
