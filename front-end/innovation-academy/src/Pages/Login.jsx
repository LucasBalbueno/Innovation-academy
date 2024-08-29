import styled from "styled-components";
import logo from "../Images/Login/Logo.png";
import logoNome from "../Images/Login/LogoNome.png";
import iconeGithub from '../Images/Login/github-icon.png'
import quebraLinha from '../Images/Login/quebra-linha.png'
import boracodar from '../Images/Login/boracodar.png'
import iconLogin from '../Images/Login/icon-login.png'
import { GoChevronRight } from "react-icons/go";
import '@fontsource/poppins';

const Body = styled.div`
  color: white;
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 900px) {
    justify-content: center;
    overflow: scroll;
  }

  @media screen and (min-width: 901px){
    overflow: hidden;
  }
`;

const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  align-items: center;
  background-color: RGB(18, 18, 20);

  @media screen and (max-width: 900px) {
    display: none;
  }
  @media screen and (min-width:900 ){
    display: flex;
  }
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  background-color: white;
  width: 40%;
  background-color: RGB(26, 26, 30);

  @media screen and (max-width: 900px) {
    width: 100%;
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

// Conteudo Box2
const LogoNome = styled.img`
  width: 60%;
  padding-bottom: 8%;
`;

const TituloForm = styled.span`
  font-size: 18px;
  padding-bottom: 5%;
`;

const Input = styled.input`
color: white;
  background-color: RGB(42, 42, 44);
  border: 1px solid transparent;
  padding: 3%;
  border-radius: 5px 5px 5px;
  margin-bottom: 5%;

  &:focus{
    border-color: RGB(10, 189, 98);
    outline: none;
  }
`;

const LabelInput = styled.span`
  padding-bottom: 2%;
  font-size: 12px;
`;

const EsqueciSenha = styled.span`
width: fit-content;
 color: RGB(10, 189, 98);
 padding-bottom: 5%;
 transition: 0.3s ease;
 font-size: 12px;

 &:hover{
  cursor: pointer;
  color: rgb(23, 155, 87);
 }

`;

const BtnEntar = styled.button`
  background-color: RGB(10, 189, 98);
  border: none;
  padding: 3%;
  font-family: 'Poppins' , sans-serif;
  margin-bottom: 5%;
  color: white;
  border-radius: 5px 5px 5px;
  font-size: 15px;
  transition: 0.3s ease;

  &:hover{
    cursor: pointer;
    background-color: rgb(23, 155, 87);
  }
`;

const DivBtnGithub = styled.div`
 display: flex;
 align-items: center;
 font-size: 12px;
`;

const IconeGithub = styled.img`
  margin-right: 3%;
  transition: 0.3s ease;
`;

const BtnGithub = styled.button`
  margin-left: 5%;
  font-family: 'Poppins', sans-serif;
  border-radius: 5px 5px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: RGB(42, 42, 44);
  border: none;
  color: white;
  padding: 2%;
  font-size: 12px;
  transition: 0.3s ease;

  &:hover{
    cursor: pointer;
    background-color: rgb(36, 36, 37);
  }

  &:hover ${IconeGithub}{
    transform: rotate(45deg);
  }
`;

const QuebraLinha = styled.img`
  margin-top: 8%;
`;

const ImgIconLogin = styled.img`
  transform: scale(0.8);
`;
const GoChevronRightStyled = styled(GoChevronRight)`
  color:RGB(10, 189, 98);
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

   &:hover{
    cursor: pointer;
   }

   &:hover ${GoChevronRightStyled}{
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

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 1%;
  margin-left: 1%;
  color: RGB(39, 39, 40);
`;





function Login() {
  return (
    <Body>
      <Box1>
        <ImgLogo src={logo} alt="" srcset="" />
        <ImgBoracodar src={boracodar} alt="" srcset="" />
      </Box1>
      <Box2>
        <LogoNome src={logoNome} alt="" srcset="" />
        <TituloForm>Acesse sua conta</TituloForm>
        <LabelInput>Email</LabelInput>
        <Input type="text"/>
        <LabelInput>Senha</LabelInput>
        <Input type="password" />
        <EsqueciSenha>Esqueci minha senha</EsqueciSenha>
        <BtnEntar>Entrar</BtnEntar>
        <DivBtnGithub>
          <span>Ou se preferir</span>
          <BtnGithub><IconeGithub src={iconeGithub} alt="" srcset="" />Entre com o Github</BtnGithub>
        </DivBtnGithub>
        <QuebraLinha src={quebraLinha} alt="" srcset="" />
        <DivBtnInscrever>
          <BtnInscreverLeft>
            <ImgIconLogin src={iconLogin} alt="" />
            <ConteudoBtnInscreverLeft>
              <span>Não tem  uma conta?</span>
              <SeInscreva>Se inscreva gratuitamente</SeInscreva>
            </ConteudoBtnInscreverLeft>
          </BtnInscreverLeft>

          <div>
            <GoChevronRightStyled />
          </div>
        </DivBtnInscrever>
      </Box2>
      <Footer><h5>@inovaTech</h5></Footer>
    </Body>
  );
}

export default Login;
