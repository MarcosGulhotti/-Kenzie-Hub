import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.whiteTheme ? "#F1EDE0" : "#d74850")};
  color: ${(props) => (props.whiteTheme ? "#323441" : "#F6F4EA")};
  height: 50px;
  border-radius: 10px;
  border: 2px solid ${(props) => (props.whiteTheme ? '#F1EDE0' : '#d74850')};
  margin-top: 16px;
  width: 45%;
  font-weight: bold;
  transition: 1s;
  font-size: 25px;

  &:hover {
    border: 3px solid var(--black)
  }
`;
