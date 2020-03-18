import styled from "styled-components";
import Theme from "../../../../core/theme/index";

export const ContainerSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 98%;
`;
export const ContainerInfo = styled.div`
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background: ${Theme.colors.white};
`;
