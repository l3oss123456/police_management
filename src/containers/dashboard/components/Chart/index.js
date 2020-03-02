//@flow
import React from "react";
import enhanceChart from "./enhanceChart";

type Props = {
  chartName: String,
  chartData: Array
};

const Chart = (props: Props) => {
  const { chartName } = props;
  return <div id={chartName} style={{ height: "230px" }} />;
};
export default enhanceChart(Chart);
