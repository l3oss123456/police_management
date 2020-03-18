import React from "react";
import {
  ContainerTopic,
  ContainerDetail,
  ContainerInformation,
  TopicText,
  Text
} from "../../Styled/index";

const UserInformation = props => {
  const { amountUser } = props;
  return (
    <div>
      <ContainerTopic>
        <TopicText fontSize="24" bold marginTop>
          ข้อมูลการรับยา
        </TopicText>
        <TopicText fontSize="16" color="gray" marginBottom>
          จำนวนผู้รับยา
        </TopicText>
      </ContainerTopic>
      <ContainerDetail>
        <ContainerInformation>
          <Text color>ชาย</Text>
          <Text bold>{amountUser.male}</Text>
        </ContainerInformation>
        <ContainerInformation>
          <Text color>หญิง</Text>
          <Text bold>{amountUser.female}</Text>
        </ContainerInformation>
        <ContainerInformation>
          <Text color>รวม</Text>
          <Text bold>{amountUser.total}</Text>
        </ContainerInformation>
      </ContainerDetail>
    </div>
  );
};
export default UserInformation;
