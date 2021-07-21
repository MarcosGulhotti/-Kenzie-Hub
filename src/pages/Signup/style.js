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
  height: 100vh;
`;

export const Content = styled.div`
  margin-bottom: 6rem;
  border: 2px solid var(--white);
  border-radius: 50px;
  background-color: var(--ligthGray);
  padding: 1rem;
  width: 500px;
  display: flex;
  justify-content: center;

  h1 {
    margin-bottom: 1rem;
    text-shadow: 0px 6px 6px var(--black);
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    div {
      width: 100%;
      margin-top: 0.3rem;
    }
    p {
      font-weight: bold;
      margin-top: 1rem;
      span {
        a {
          color: var(--red);

          &:visited {
            color: var(--red);
          }
        }
      }
    }
  }
`;
export const Animation = styled.div`
  animation: ${opacity} 1s;
`;
