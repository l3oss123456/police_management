import React from "react";
import enhanceChart from "./enhanceChart";

const Chart = props => {
  const { chartName } = props;
  return <div id={chartName} style={{ height: "230px" }} />;
};
export default enhanceChart(Chart);
