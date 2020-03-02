//@flow
import React from "react";
import enhanceChart from "./enhanceChart";

type Props = {
  chartName: String,
  chartData: Array
};

const Chart = (props: Props) => {
  const { chartName } = props;
  return <div id={chartName} style={{ height: "350px" }} />;
};
export default enhanceChart(Chart);
