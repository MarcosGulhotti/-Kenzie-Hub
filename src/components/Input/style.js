import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  div {
    font-size: 17px;
    font-weight: bold;
    span {
      color: var(--red);
    }
  }
`;

export const ContainerInput = styled.div`
  background: var(--gray);
  border-radius: 10px;
  border: 2px solid var(--gray);
  color: var(--gray);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.5s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}

  &:hover {
    border-color: var(--white);
  }

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--white);
    font-size: 20px;

    &::placeholder {
      color: var(--place);

      font-size: 15px;
      font-weight: bold;
    }
  }
`;
