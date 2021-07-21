import styled from "styled-components";

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 15px;

  width: 250px;
  height: 250px;
  background-color: var(--white);

  margin: 1rem;

  button {
      width: 30px;
      height: 30px;

      border-radius: 10px;
      border: none;

      background-color: var(--red);

      position: absolute;
      margin-left: 210px;
      margin-top: 10px;

      display: flex;
      align-items: center;
      justify-content: center;

      svg{
        width: 20px;
        height: 20px;
      }
    }

  header {
    background-color: var(--black);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 1rem;
    }
  }
  div {
    padding: 1rem;
    max-width: 250px;
    height: calc(250px - 80px);
    word-wrap: break-word;
    p {
      height: 100px;
      color: var(--black);
      font-weight: bold;
    }
  }
`;
