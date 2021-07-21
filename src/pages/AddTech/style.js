import styled, { keyframes } from "styled-components";

const opacity = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

export const Content = styled.div`
  background-color: var(--ligthGray);
  width: 1250px;
  height: 750px;
  margin-top: 3rem;
  border-radius: 15px;
  border: 1px solid var(--red);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${opacity} 1s;
`;

export const Tech = styled.div`
  width: 100%;
  height: 90px;
  padding: 1rem;

  button {
    width: 250px;
    margin-left: 2rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${opacity} 1s;
`;

export const User = styled.div`
  width: 100%;
  height: 70px;
  background-color: var(--red);

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  button{
    width: 250px;
    margin: 0.5rem 0.5rem;
  }
`;

export const Modal = styled.div`
  border: 2px solid var(--white);
  border-radius: 50px;
  background-color: var(--ligthGray);
  padding: 2.5rem;
  height: 60vh;
  width: 450px;
  margin-top: 4rem;

  h1 {
    text-shadow: 0px 6px 6px var(--black);
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    h1 {
      font-size: 1.8rem;
    }
    div {
      width: 100%;
      margin-top: 1rem;
    }
    button {
        margin-top: 3rem;
    }
  }
`;
