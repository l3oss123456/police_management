//@flow
import React from "react";
import { Input, Button, DatePicker } from "antd";
import moment from "moment";
import * as R from "ramda";
import { getItemLocalStorage } from "../../core/storage/index";
import enhance from "./enhance";
import { StyledContainerSearch, StyledSearch } from "./styled";

const { RangePicker } = DatePicker;

type Props = {
  pushSearchUrl: String,
  pathUrl: String,
  addBtnText: String,
  history: Any,
  isAddBtn: Boolean,
  isRangePicker: Boolean,
  setSearchValue: Any,
  setRangeDate: Any
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
    setRangeDate
  } = props;
  const role = R.path(["role"], JSON.parse(getItemLocalStorage("userInfo")));
  const dateFormat = "YYYY-MM-DD";
  return (
    <StyledContainerSearch>
      <StyledSearch width="280px">
        <Input
          autoFocus
          placeholder="ค้นหาข้อมูล"
          // onChange={e => debounceSearchValue(e.target.value)}
          onChange={e => setSearchValue(e.target.value)}
          onPressEnter={() => pushSearchUrl()}
        />
      </StyledSearch>

      <StyledSearch>
        {isRangePicker && (
          <RangePicker
            // defaultValue={[
            //   moment("2015/01/01", dateFormat),
            //   moment("2015/01/01", dateFormat)
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
        )}
      </StyledSearch>

      <StyledSearch>
        <Button icon="search" onClick={() => pushSearchUrl()}>
          ค้นหา
        </Button>
      </StyledSearch>
      {role === "แอดมิน" && isAddBtn && (
        <StyledSearch>
          <Button
            icon="plus"
            onClick={() =>
              R.isEmpty(externalUrl)
                ? (window.location.href = `${externalUrl}`)
                : history.push(`/${pathUrl}/create`)
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
