import styled from "styled-components";
import { Select } from "antd";
import Theme from "../../core/theme/index";

export const StyledSelect = styled(Select)`
  font-size: ${Theme.fontSize.text}
  font-family: ${Theme.fontFamily.primary}
`;
