import styled from "styled-components";

export const ContainerSpin = styled.div`
  width: ${props => (props.width ? `${props.width}px` : "100vw")};
  height: ${props => (props.height ? `${props.height}px` : "100vh")};
  display: flex;
  justify-content: center;
  align-items: center;
`;
