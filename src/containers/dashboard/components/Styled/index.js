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
  width: ${props => (props.width ? props.width : "20%")};
`;

export const ContainerTopic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;
export const TopicText = styled.div`
  color: ${props => (props.color ? props.color : "black")};
  font-family: ${Theme.fontFamily.primary}
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : "")};
  font-weight: ${props => (props.bold ? "bold" : "")};
  margin-top: ${props => (props.marginTop ? "20px" : "")};
  margin-bottom: ${props => (props.marginBottom ? "20px" : "")};
  margin-left: 20px;
`;

export const Text = styled.div`
  color: ${props => (props.color ? "gray" : "black")};
  font-family: ${Theme.fontFamily.primary}
  font-size: ${props => (props.fontSize ? props.fontSize : Theme.fontSize.text)}
  font-weight: ${props => (props.bold ? "bold" : "")};
`;

export const ContainerDetail = styled.div`
  padding: 10px;
`;

export const ContainerInformation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-left: 10px;
`;
