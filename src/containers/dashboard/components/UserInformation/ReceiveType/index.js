import React from "react";
import {
  ContainerTopic,
  ContainerDetail,
  ContainerInformation,
  TopicText,
  Text
} from "../../Styled/index";

const UserInformation = props => {
  const { receiveType } = props;
  const { totalBySelfReceive, totalAgentReceive } = receiveType;
  return (
    <div>
      <ContainerTopic>
        <TopicText fontSize="24" bold marginTop>
          ข้อมูลการรับยา
        </TopicText>
        <TopicText fontSize="16" color="gray" marginBottom>
          ประเภทการรับยา
        </TopicText>
      </ContainerTopic>
      <ContainerDetail>
        <ContainerInformation>
          <Text color>ตนเอง</Text>
          <Text bold>{totalBySelfReceive}</Text>
        </ContainerInformation>
        <ContainerInformation>
          <Text color>ตัวแทน</Text>
          <Text bold>{totalAgentReceive}</Text>
        </ContainerInformation>
      </ContainerDetail>
    </div>
  );
};
export default UserInformation;
