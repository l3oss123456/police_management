//@flow
import React from "react";
import { Select } from "antd";
import * as R from "ramda";

const { Option } = Select;

type Props = {
  defaultData: String,
  allData: Array,
  selected: String
};

const ComponentSelect = (props: Props) => {
  const { defaultData, allData, selected } = props;
  const handleChange = value => {
    selected(value);
  };
  const width = R.pathOr("", ["width"], props);
  return allData ? (
    <Select value={defaultData} onChange={handleChange} style={{ width }}>
      {Object.values(allData).map(item => {
        return <Option value={item}>{item}</Option>;
      })}
    </Select>
  ) : null;
};
export default ComponentSelect;
