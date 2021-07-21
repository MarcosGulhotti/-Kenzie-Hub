import styled from "styled-components";
import Task from "../../assets/Task.svg";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;
export const Background = styled.div`
  @media (min-width: 1023px) {
    flex: 1;
    background: url(${Task}) no-repeat center, var(--vanilla);
    background-size: contain;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  div {
    display: flex;
    margin-top: 3rem;
    width: 100%;
    margin-bottom: 5rem;
    justify-content: center;
  }

  h1 {
    text-shadow: 0px 6px 6px var(--black);
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 5rem;
  }

  button {
    font-size: 25px;
  }

  button + button {
    margin-left: 1rem;
  }

  p {
    font-family: "Roboto Mono", monospace;
    padding: 1rem;
  }

  @media (min-width: 1023px) {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 40vw;
    height: 100vh;
    h1 {
      text-shadow: 0px 6px 6px var(--black);
      font-size: 4rem;
      font-weight: bold;
      margin-bottom: 5rem;
    }

    div {
      display: flex;
      margin-top: 3rem;
      width: 100%;
      margin-bottom: 5rem;
      justify-content: center;

      button {
        font-size: 30px;
      }

      button + button {
        margin-left: 1rem;
      }

      p {
        font-family: "Roboto Mono", monospace;
        padding: 1rem;
      }
    }
  }
`;
