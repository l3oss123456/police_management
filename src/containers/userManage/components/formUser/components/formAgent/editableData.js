import React from "react";

const setEditable = props => {
  const { columnsName, index } = props;
  const selectedIndex = {
    columnsName: columnsName,
    key: index
  };
  props.setEditingTable(selectedIndex);
  props.setFocusEditingTable(true);
};

const EditTableData = props => {
  const { text } = props;
  return <div onMouseOver={e => setEditable(props)}>{text}</div>;
};
export default EditTableData;
