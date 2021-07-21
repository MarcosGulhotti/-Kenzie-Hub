import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;

  background-color: var(--vanilla);

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: var(--white);
    font-size: 3rem;
    text-shadow: 5px 5px 4px var(--black);

    font-weight: bold;
  }
`;
