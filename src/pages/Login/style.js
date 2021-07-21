import styled, { keyframes } from "styled-components";

const opacity = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 100vh; */
`;

export const Content = styled.div`

  /* @media (max-height:) */

  border: 2px solid var(--white);
  border-radius: 50px;
  background-color: var(--ligthGray);
  padding: 1rem;
  height: 500px;
  margin-top: 5rem;

  h1 {
    text-shadow: 0px 6px 6px var(--black);
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    h1{
      font-size: 2.7rem;
    }
    div {
      width: 100%;
      margin-top: 1rem;
    }
  }

  p {
    font-weight: bold;
    margin-top: 2rem;
    span {
      a {
        color: var(--red);

        &:visited {
          color: var(--red);
        }
      }
    }
  }

  button {
    width: 75%;
    text-shadow: 1px 1px 3px var(--black);
    margin-top: 3rem;
  }
`;
export const Animation = styled.div`
  animation: ${opacity} 1s;
`;
