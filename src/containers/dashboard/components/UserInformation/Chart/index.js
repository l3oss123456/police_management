//@flow
import React from "react";
import { ContainerTopic, TopicText } from "../../Styled/index";
import enhanceChart from "./enhanceChart";

type Props = {
  chartName: String,
  chartData: Array
};

const Chart = (props: Props) => {
  const { chartName } = props;
  return (
    <div>
      <ContainerTopic>
        <TopicText fontSize="24" bold marginTop>
          แผนภูมิจำนวนผู้รับยา & ประเภทการรับยา
        </TopicText>
      </ContainerTopic>
      <div id={chartName} style={{ height: "350px" }} />
    </div>
  );
};
export default enhanceChart(Chart);
