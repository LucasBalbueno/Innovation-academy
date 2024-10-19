import styled from "styled-components";
import logoNome from "./assets/LogoNome.png";
import iconeGithub from "./assets/github-icon.png";
import quebraLinha from "./assets/quebra-linha.png";
import iconeGoogle from "./assets/iconeGoogle.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import PassRecoverModal from "./components/modal/PassRecoverModal";

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

  &:focus {
    border-color: RGB(10, 189, 98);
    outline: none;
  }
`;

const LabelInput = styled.span`
  padding-bottom: 2%;
  font-size: 12px;
`;

const FaEyeCustom = styled(FaEyeSlash)`
  position: absolute;
  right: 10px;
  scale: 1.5;
  background-color: RGB(42, 42, 44);
  border-radius: 5px, 5px;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 5%;
`;

const InputPassword = styled.input`
  color: white;
  width: 100%;
  background-color: RGB(42, 42, 44);
  border: 1px solid transparent;
  padding: 3%;
  border-radius: 5px 5px 5px;

  &:focus {
    border-color: RGB(10, 189, 98);
    outline: none;
  }
`;

const EsqueciSenha = styled.span`
  width: fit-content;
  color: RGB(10, 189, 98);
  padding-bottom: 5%;
  transition: 0.3s ease;
  font-size: 12px;

  &:hover {
    cursor: pointer;
    color: rgb(23, 155, 87);
  }
`;

const BtnEntar = styled.button`
  background-color: RGB(10, 189, 98);
  border: none;
  padding: 3%;
  font-family: "Poppins", sans-serif;
  margin-bottom: 5%;
  color: white;
  border-radius: 5px 5px 5px;
  font-size: 15px;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: rgb(23, 155, 87);
  }
`;

const DivBtnGithub_Google = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const IconeGithub = styled.img`
  margin-right: 5%;
  transition: 0.3s ease;
`;

const IconeGoogle = styled.img`
  width: 20%;
  margin-right: 5%;
  transition: 0.3s ease;
`;

const BtnGithub = styled.button`
  height: 100%;
  margin-left: 2%;
  font-family: "Poppins", sans-serif;
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

  &:hover {
    cursor: pointer;
    background-color: rgb(36, 36, 37);
  }

  &:hover ${IconeGithub} {
    transform: rotate(45deg);
  }
`;

const BtnGoogle = styled.button`
  margin-left: 2%;
  font-family: "Poppins", sans-serif;
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

  &:hover {
    cursor: pointer;
    background-color: rgb(36, 36, 37);
  }

  &:hover ${IconeGoogle} {
    transform: rotate(45deg);
  }
`;

const QuebraLinha = styled.img`
  margin-top: 8%;
`;

function FormLogin() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [esqueceuSenha, setEsqueceuSenha] = useState(false);

  const verSenha = () => {
    if (!mostrarSenha) {
      setMostrarSenha(true);
    } else {
      setMostrarSenha(false);
    }
  };

  return (
    <>
      <LogoNome src={logoNome} alt="" srcSet="" />
      <TituloForm>Acesse sua conta</TituloForm>
      <LabelInput>Email</LabelInput>
      <Input type="text" />
      <LabelInput>Senha</LabelInput>
      <InputContainer>
        <InputPassword type={mostrarSenha ? "text" : "password"} />
        {mostrarSenha ? (
          <FaEyeCustom as={FaEye} onClick={verSenha} />
        ) : (
          <FaEyeCustom onClick={verSenha} />
        )}
      </InputContainer>
      <EsqueciSenha onClick={() => setEsqueceuSenha(true)}>Esqueci minha senha</EsqueciSenha>
      {esqueceuSenha ? (
          <PassRecoverModal 
            setEsqueceuSenha={setEsqueceuSenha}
          />
        ):(
          <div/>
        )
      }
      <BtnEntar>Entrar</BtnEntar>
      <DivBtnGithub_Google>
        <span>Ou se preferir</span>
        <BtnGithub>
          <IconeGithub src={iconeGithub} alt="" srcSet="" />
          Entre com o Github
        </BtnGithub>
        <BtnGoogle>
          <IconeGoogle src={iconeGoogle} alt="" srcSet="" />
          Entre com o Google
        </BtnGoogle>
      </DivBtnGithub_Google>
      <QuebraLinha src={quebraLinha} alt="" srcSet="" />
    </>
  );
}
export default FormLogin;
