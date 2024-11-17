import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: var(--contrast-color);
  }

  button {
    width: 30rem;
    height: 2.5rem;
    border-radius: 10px;
    background-color: var(--contrast-color);
    color: var(--background-color);
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    margin-bottom: 2rem;

    &:hover {
      opacity: 0.9;
      transition: opacity 0.3s;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    color: var(--text-color);

    > label {
      display: flex;
      flex-direction: column;
      margin: 1rem 0;
      gap: 0.5rem;

      input,
      select,
      textarea {
        width: 30rem;
        height: 2rem;
        border-radius: 10px;
        padding: 0 0.5rem;
        background-color: var(--gray-color);
        border: none;
        color: var(--text-color);
        opacity: 0.5;
      }

      input::placeholder,
      select::placeholder,
      textarea::placeholder {
        color: var(--text-color);
        opacity: 0.5;
      }

      select {
        height: 2.5rem;
      }

      textarea {
        height: 15rem;
        resize: none;
      }
    }
  }

  @media screen and (max-width: 520px) {
    form {
      display: none;
    }

    form {
      > label {
        input,
        select,
        textarea {
          width: 20rem;
        }
      }

      > button {
        width: 20rem;
      }
    }
  }
`;

export const ContainerAllFeedbacks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem 6rem;
  width: 1100px;
  padding-bottom: 2rem;

  h1 {
    color: var(--contrast-color);
    margin-top: 4rem;
  }

  @media screen and (max-width: 1380px) {
    width: 1000px;
  }

  @media screen and (max-width: 1270px) {
    width: 900px;
  }

  @media screen and (max-width: 950px) {
    width: 500px;
  }

  @media screen and (max-width: 520px) {
    width: 300px;
  }

  @media screen and (max-width: 410px) {
    width: 300px;
  }
`;
