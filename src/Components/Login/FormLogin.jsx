import styled from "styled-components";
import logo from "./assets/LogoMenor.png";
import iconeGithub from "./assets/github-icon.png";
import quebraLinha from "./assets/quebra-linha.png";
import iconeGoogle from "./assets/iconeGoogle.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import PassRecoverModal from "./components/modal/PassRecoverModal";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const DivLogo = styled.div`
  height: auto;
  justify-content: center;
  padding-bottom: 8%;
`;

const LogoNome = styled.img`
  width: 45px;
`;

const NomeLogo = styled.span`
  padding-left: 2%;
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  font-family: "Poppins", sans-serif;
`;

const SpanNome = styled.span`
  color: RGB(10, 189, 98);
  font-weight: 600;
`;

const TituloForm = styled.span`
  font-size: 18px;
  padding-bottom: 5%;
`;

const Input = styled.input`
  color: var(--text-color);
  background-color: var(--main-color);
  border: 1px solid transparent;
  padding: 3%;
  border-radius: 5px 5px 5px;
  margin-bottom: 5%;

  &:focus {
    border-color: var(--contrast-color);
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
  background-color: none;
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
  color: var(--text-color);
  width: 100%;
  background-color: var(--main-color);
  border: 1px solid transparent;
  padding: 3%;
  border-radius: 5px 5px 5px;

  &:focus {
    border-color: var(--contrast-color);
    outline: none;
  }
`;

const ErroMessage = styled.p`
  font-size: 0.8rem;
  color: red;
`;

const EsqueciSenha = styled.span`
  width: fit-content;
  color: var(--contrast-color);
  padding-bottom: 5%;
  transition: 0.3s ease;
  font-size: 12px;

  &:hover {
    cursor: pointer;
    color: var(--contrast-color);
  }
`;

const BtnEntar = styled.button`
  background-color: var(--contrast-color);
  border: none;
  padding: 3%;
  font-family: var(--font-poopins);
  margin-bottom: 5%;
  color: var(--text-color);
  border-radius: 5px 5px 5px;
  font-size: 15px;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: var(--contrast-color-hover);
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
  font-family: var(--font-poopins);
  border-radius: 5px 5px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: var(--main-color);
  border: none;
  color: var(--text-color);
  padding: 2%;
  font-size: 12px;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: var(--gray-color);
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
  background-color: var(--main-color);
  border: none;
  color: var(--text-color);
  padding: 2%;
  font-size: 12px;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: var(--gray-color);
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
  const [email, setEmail] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const navigate = useNavigate();

  const verSenha = () => {
    if (!mostrarSenha) {
      setMostrarSenha(true);
    } else {
      setMostrarSenha(false);
    }
  };

  const entrar = async () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErroEmail("");
    setErroSenha("");

    if (email === "") {
      setErroEmail("Esse campo precisa ser preenchido!");
      return;
    } else if (!regexEmail.test(email)) {
      setErroEmail("Email não contém os caracteres padrões necessários!");
      return;
    }
    if (senha == "") {
      setErroSenha("Esse campo precisa ser preenchido!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email: email,
        password: senha,
      });
      localStorage.setItem("jwt", response.data);
      navigate("/home");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Usuário não cadastrado",
        text: "Seu usuário ainda não foi cadastrado, verifique seus dados e tente novamente!",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
      <DivLogo>
        <LogoNome src={logo} alt="" srcSet="" />
        <NomeLogo>
          IAcademy <SpanNome>Premium</SpanNome>
        </NomeLogo>
      </DivLogo>
      <TituloForm>Acesse sua conta</TituloForm>
      <LabelInput>Email</LabelInput>
      <Input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <ErroMessage>{erroEmail}</ErroMessage>
      <LabelInput>Senha</LabelInput>
      <InputContainer>
        <InputPassword
          type={mostrarSenha ? "text" : "password"}
          onChange={(e) => {
            setSenha(e.target.value);
          }}
        />
        {mostrarSenha ? (
          <FaEyeCustom as={FaEye} onClick={verSenha} />
        ) : (
          <FaEyeCustom onClick={verSenha} />
        )}
      </InputContainer>
      <EsqueciSenha onClick={() => setEsqueceuSenha(true)}>
        Esqueci minha senha
      </EsqueciSenha>
      {esqueceuSenha ? (
        <PassRecoverModal setEsqueceuSenha={setEsqueceuSenha} />
      ) : (
        <div />
      )}
      <BtnEntar onClick={entrar}>Entrar</BtnEntar>
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
