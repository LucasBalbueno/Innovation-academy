import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .font2P {
    color: var(--contrast-color);
    font-family: var(--font-2P);
    font-size: 32px;
    margin: 10rem 0;
    text-align: center;
  }
`;

export const ContainerInitial = styled.div`
  h1 {
    font-size: calc(32px * var(--font-size-multiplier));
    color: var(--text-color);
  }

  span {
    color: var(--contrast-color);
  }

  p {
    font-size: calc(24px * var(--font-size-multiplier));
    color: var(--text-color);
  }

  .containerRecents {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;

export const Recents = styled.div`
  div {
    width: 17rem;
  }

  .imageContent {
    width: 100%;
    height: 12rem;
    border-radius: 10px 10px 0 0;

    background-color: var(--gray-color);
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      color: var(--text-color);
    }
  }

  .infosContent {
    width: 100%;
    background-color: var(--background-color);
    padding-bottom: 0.5rem;
    border-radius: 0 0 10px 10px;

    div {
      width: 100%;
      padding: 0.5rem 1rem;
      display: flex;
      justify-content: space-between;
    }

    p {
      font-size: calc(16px * var(--font-size-multiplier));
      color: var(--contrast-color);
      margin: 0;
    }
  }
`;

export const ContainerBanners = styled.div`
  width: 1136px;
  margin-top: 5rem;

  p {
    text-transform: uppercase;
    color: var(--contrast-color);
  }

  img {
    width: 1136px;
  }

  @media screen and (max-width: 1420px) {
    width: 900px;

    img {
      width: 900px;
    }
  }

  @media screen and (max-width: 1200px) {
    width: 700px;

    img {
      width: 700px;
    }
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const ContainerText = styled.div`
  text-align: center;
  width: 65rem;
  margin-top: 5rem;

  h2 {
    color: var(--contrast-color);
    font-family: var(--font-2P);
    font-size: 32px;
  }

  p {
    font-size: calc(26px * var(--font-size-multiplier));
    font-weight: 500;
    color: var(--text-color);
  }

  @media screen and (max-width: 1050px) {
    width: 50rem;
  }

  @media screen and (max-width: 850px) {
    width: 35rem;
  }

  @media screen and (max-width: 580px) {
    width: 19rem;
  }
`;

export const ContainerFeedback = styled.div`
  margin-top: 5rem;

  p {
    text-transform: uppercase;
    color: var(--contrast-color);
  }

  .groupCards {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem 6rem;
    width: 1100px;

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
  }

  .styledLinkContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
  }

  .styledLinkFeedback {
    color: var(--contrast-color);
    font-size: calc(20px * var(--font-size-multiplier));
    align-self: center;
  }
`;

export const EvaluationCard = styled.div`
  background-color: var(--background-color);
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  gap: 4rem;

  .profilePhoto {
    width: 98px;
  }

  .feedbackContent {
    display: flex;
    flex-direction: column;
    color: var(--text-color);
    font-size: 15px;

    h3 {
      font-size: calc(20px * var(--font-size-multiplier));
      text-transform: capitalize;
      margin: 0;
    }

    span {
      margin: 0 0 0.3rem 0;
    }

    p {
      text-transform: none;
      margin: 0;
      color: var(--text-color);
    }

    img {
      width: 177px;
      margin: 0 0 0.3rem 0;
    }
  }

  @media screen and (max-width: 1380px) {
    width: 25rem;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
    flex-direction: column;
    text-align: center;

    .profilePhoto {
      align-self: center;
    }
  }
`;
