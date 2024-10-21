
import Footer from "../Layout/Footer"
import '../../Styles/Global.css'

import styled from "styled-components";
import { useState } from "react";
import logo from "./assets/Logo.png";
import boracodar from "./assets/boracodar.png";
import iconLogin from "./assets/icon-login.png";
import { GoChevronRight } from "react-icons/go";
import FormCadastro from "../Register/FormCadastro"
import FormLogin from "./FormLogin";

const Body = styled.div`
  color: white;
  font-family: "Poppins", sans-serif;
  background-color: RGB(18, 18, 20);
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    justify-content: center;
    overflow-y: scroll;
  }

  @media screen and (max-width: 1440px) {
    overflow-y: scroll;
  }
`;

const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  align-items: center;
  background-color: RGB(18, 18, 20);
  transition: transform 0.5s ease-in-out;

  ${({ move }) =>
    move &&
    `
    transform: translateX(70%);
    
  `}

  @media screen and (max-width: 768px) {
    display: none;
  }


`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  background-color: white;
  width: 40%;
  background-color: RGB(26, 26, 30);
  transition: transform 0.5s ease-in-out;

  ${({ move }) =>
    move &&
    `
    transform: translateX(-150%);
    padding-top: 1%;
  `}

  @media screen and (max-width: 768px) {
    width: 100%;
    transition: transform 1s ease-in-out;
    ${({ move }) =>
      move &&
      `
    transform: rotateY(360deg);
  `}
  }

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

// Conteúdo Box1
const ImgLogo = styled.img`
  width: 20%;
  padding-bottom: 5%;
`;

const ImgBoracodar = styled.img`
  width: 15%;
`;

//Conteúdo Box2
const ImgIconLogin = styled.img`
  transform: scale(0.8);
`;

const GoChevronRightStyled = styled(GoChevronRight)`
  color: RGB(10, 189, 98);
  transition: 0.3s ease;
`;

const DivBtnInscrever = styled.div`
  background-color: RGB(42, 42, 44);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3%;
  border-radius: 5px 5px 5px;
  margin-top: 5%;

  &:hover {
    cursor: pointer;
  }

  &:hover ${GoChevronRightStyled} {
    transform: scale(1.5);
  }
`;

const ConteudoBtnInscreverLeft = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

const BtnInscreverLeft = styled.div`
  display: flex;
  align-items: center;
`;

const SeInscreva = styled.span`
  color: RGB(10, 189, 98);
`;

function Login() {
  const [moveBoxes, setMoveBoxes] = useState(false);
  const handleBoxes = () => {
    if (!moveBoxes) {
      setMoveBoxes(true);
    } else {
      setMoveBoxes(false);
    }
  };

  return (
    <Body>
      <Box1 move={moveBoxes}>
        <ImgLogo src={logo} alt="" srcset="" />
        <ImgBoracodar src={boracodar} alt="" srcset="" />
      </Box1>
      <Box2 move={moveBoxes}>
        {moveBoxes ? (
          <>
            <FormCadastro />
            <DivBtnInscrever onClick={handleBoxes}>
              <BtnInscreverLeft>
                <ImgIconLogin src={iconLogin} alt="" />
                <ConteudoBtnInscreverLeft>
                  <span>Já tem uma conta?</span>
                  <SeInscreva>Entre e aproveite o conteudo</SeInscreva>
                </ConteudoBtnInscreverLeft>
              </BtnInscreverLeft>
              <div>
                <GoChevronRightStyled />
              </div>
            </DivBtnInscrever>
          </>
        ) : (
          <>
            <FormLogin />
            <DivBtnInscrever onClick={handleBoxes}>
              <BtnInscreverLeft>
                <ImgIconLogin src={iconLogin} alt="" />
                <ConteudoBtnInscreverLeft>
                  <span>Não tem uma conta?</span>
                  <SeInscreva>Se inscreva gratuitamente</SeInscreva>
                </ConteudoBtnInscreverLeft>
              </BtnInscreverLeft>
              <div>
                <GoChevronRightStyled />
              </div>
            </DivBtnInscrever>
          </>
        )}
      </Box2>
    </Body>
  );
}

export default Login;
