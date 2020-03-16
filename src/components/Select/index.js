//@flow
import React from "react";
import { Select } from "antd";
import * as R from "ramda";
import { StyledSelect } from "./styled";

const { Option } = Select;

type Props = {
  defaultData: String,
  allData: Array,
  selected: String
};

const ComponentSelect = (props: Props) => {
  const { mode, defaultData, allData, selected, getIndex } = props;
  const handleChange = value => {
    selected(value);
  };
  const width = R.pathOr("", ["width"], props);
  return allData && mode !== "multiple" ? (
    getIndex ? (
      <StyledSelect
        value={allData[0]}
        onChange={handleChange}
        style={{ width }}
      >
        {Object.values(allData).map((item, index) => {
          return <Option value={index}>{item}</Option>;
        })}
      </StyledSelect>
    ) : (
      <StyledSelect
        value={defaultData}
        onChange={handleChange}
        style={{ width }}
      >
        {Object.values(allData).map((item, index) => {
          return <Option value={item}>{item}</Option>;
        })}
      </StyledSelect>
    )
  ) : (
    <StyledSelect mode={mode} onChange={handleChange} style={{ width }}>
      {Object.values(allData).map((item, index) => {
        return <Option value={item}>{item}</Option>;
      })}
    </StyledSelect>
  );
};
export default ComponentSelect;
