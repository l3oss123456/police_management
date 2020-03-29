//@flow
import React from "react";
import { Input, Button, DatePicker } from "antd";
import moment from "moment";
import * as R from "ramda";
import { getItemLocalStorage } from "../../core/storage/index";
import Select from "../Select/index";
import enhance from "./enhance";
import { StyledContainerSearch, StyledSearch, Text } from "./styled";

const { RangePicker } = DatePicker;

type Props = {
  pushSearchUrl: String,
  pathUrl: String,
  addBtnText: String,
  history: Any,
  isAddBtn: Boolean,
  isRangePicker: Boolean,
  setSearchValue: Any,
  setRangeDate: Any,
  isSelectedGender: Boolean,
  selectedGender: String,
  setSelectedGender: Any,
  isSelectedRangeAge: Boolean,
  selectedRangeAge: String,
  setSelectedRangeAge: Any,
  searchFromCard: Boolean,
  cardSearching: Any,
  schema: String
};

const SearchComponent = (props: Props) => {
  const {
    pushSearchUrl,
    pathUrl,
    externalUrl,
    addBtnText,
    history,
    isAddBtn,
    isRangePicker,
    setSearchValue,
    setRangeDate,
    isSelectedGender,
    selectedGender,
    setSelectedGender,
    isSelectedRangeAge,
    selectedRangeAge,
    setSelectedRangeAge,
    searchFromCard,
    cardSearching,
    schema
  } = props;
  const role = R.path(["role"], JSON.parse(getItemLocalStorage("userInfo")));
  const dateFormat = "YYYY-MM-DD";
  return (
    <StyledContainerSearch>
      <StyledSearch width="280px">
        <Input
          autoFocus
          placeholder="ค้นหาข้อมูล"
          onChange={e => setSearchValue(e.target.value)}
          onPressEnter={() => pushSearchUrl()}
        />
      </StyledSearch>

      {isSelectedGender && (
        <StyledSearch width="170px">
          <Text>เพศ :</Text>
          <Select
            defaultData={selectedGender}
            allData={["ทั้งหมด", "ชาย", "หญิง"]}
            selected={setSelectedGender}
            width="100px"
          ></Select>
        </StyledSearch>
      )}

      {isSelectedRangeAge && (
        <StyledSearch width="170px">
          <Text>อายุ :</Text>
          <Select
            defaultData={selectedRangeAge}
            allData={[
              "ทั้งหมด",
              "1-10",
              "10-20",
              "20-30",
              "30-40",
              "40-50",
              "50-60",
              "60+"
            ]}
            selected={setSelectedRangeAge}
            width="100px"
          ></Select>
        </StyledSearch>
      )}

      {isRangePicker && (
        <StyledSearch width="280px">
          <RangePicker
            // defaultValue={[
            //   moment(moment().format(dateFormat)),
            //   moment(moment().format(dateFormat))
            // ]}
            disabledDate={current => {
              return current && current > moment().endOf("day");
            }}
            placeholder={["เริ่ม", "สิ้นสุด"]}
            ranges={{
              วันนี้: [moment(), moment()],
              เดือนนี้: [moment().startOf("month"), moment().endOf("month")],
              ปีนี้: [moment().startOf("year"), moment().endOf("year")]
            }}
            format={dateFormat}
            onChange={value => setRangeDate(value)}
          />
        </StyledSearch>
      )}

      <StyledSearch>
        <Button icon="search" onClick={() => pushSearchUrl()}>
          ค้นหา
        </Button>
      </StyledSearch>
      {searchFromCard && (
        <StyledSearch>
          <Button onClick={() => cardSearching(schema)}>ค้นหาด้วยบัตร</Button>
        </StyledSearch>
      )}
      {role === "แอดมิน" && isAddBtn && (
        <StyledSearch>
          <Button
            icon="plus"
            onClick={() =>
              !externalUrl && pathUrl
                ? history.push(`/${pathUrl}/create`)
                : window.open(`${externalUrl}`, "_blank")
            }
          >
            {addBtnText}
          </Button>
        </StyledSearch>
      )}
    </StyledContainerSearch>
  );
};
export default enhance(SearchComponent);
