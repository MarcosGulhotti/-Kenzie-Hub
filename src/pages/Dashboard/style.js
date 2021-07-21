import styled, { css } from "styled-components";
import Question from "../../assets/Question.svg";

export const Content = styled.div`
  background-color: var(--ligthGray);
  ${(props) =>
    props.props > 0
      ? css`
          background-color: var(--gray);
        `
      : css`
          background: url(${Question});
        `};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 500px;
  width: 1250px;
  height: 750px;
  margin-top: 3rem;
  border-radius: 15px;
  border: 1px solid var(--red);

  section {
    display: flex;
    flex-wrap: wrap;

    /* padding: 1rem; */

    margin-left: 3.5rem;
    margin-right: 4rem;

    max-width: 1250px;
    max-height: 590px;
  }
`;

export const Tech = styled.div`
  width: 100%;
  height: 90px;
  padding: 1rem;

  button {
    width: 250px;
    margin-left: 3.5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const User = styled.div`
  width: 100%;
  height: 70px;
  background-color: var(--red);

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    width: 15%;
    margin-bottom: 1rem;
    border-radius: 15px;
    text-shadow: 1px 1px 3px var(--black);
  }
`;
