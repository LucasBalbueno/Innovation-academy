import styled from "styled-components";
import logo from "../Login/assets/LogoMenor.png";
import iconeGithub from "../Login/assets/github-icon.png";
import iconeGoogle from "../Login/assets/iconeGoogle.png";
import quebraLinha from "../Login/assets/quebra-linha.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import "@fontsource/poppins";

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
  font-size: 1rem;
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

const Termos = styled.span`
  width: fit-content;
  color: var(--text-color);
  padding-bottom: 3%;
  transition: 0.3s ease;
  font-size: 12px;

  a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: bold;
  }
`;

const BtnCriar = styled.button`
  background-color: var(--contrast-color);
  border: none;
  padding: 3%;
  font-family: var(--font-poopins);
  margin-bottom: 3%;
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
    background-color: var(--gray-color)
  }

  &:hover ${IconeGithub} {
    transform: rotate(45deg);
  }
`;

const BtnGoogle = styled.button`
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

  &:hover ${IconeGoogle} {
    transform: rotate(45deg);
  }
`;

const QuebraLinha = styled.img`
  margin-top: 3%;
`;

function FormCadastro() {
  const [mostrarSenha1, setMostrarSenha1] = useState(false);
  const [mostrarSenha2, setMostrarSenha2] = useState(false);
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [erroNomeCompleto, setErroNomeCompleto] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [erroNomeUsuario, setErroNomeUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [senhaRepitida, setSenhaRepitida] = useState("");
  const [erroSenhaRepitida, setErroSenhaRepitida] = useState("");

  const verSenha1 = () => {
    if (!mostrarSenha1) {
      setMostrarSenha1(true);
    } else {
      setMostrarSenha1(false);
    }
  };

  const verSenha2 = () => {
    if (!mostrarSenha2) {
      setMostrarSenha2(true);
    } else {
      setMostrarSenha2(false);
    }
  };

  const criarConta = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErroNomeCompleto("");
    setErroNomeUsuario("");
    setErroEmail("");
    setErroSenha("");
    setErroSenhaRepitida("");

    if (nomeCompleto == "") {
      setErroNomeCompleto("Esse campo precisa ser preenchido!");
      return;
    }
    if (nomeUsuario == "") {
      setErroNomeUsuario("Esse campo precisa ser preenchido!");
      return;
    }
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
    if (senhaRepitida == "") {
      setErroSenhaRepitida("Esse campo precisa ser preenchido!");
      return;
    } else if (senhaRepitida !== senha) {
      setErroSenhaRepitida("As senhas não são iguais!");
      return;
    }
    alert("Usuário cadastrado");

    setNomeCompleto("");
    setNomeUsuario("");
    setEmail("");
    setSenha("");
    setSenhaRepitida("");
  };

  return (
    <>
      <DivLogo>
        <LogoNome src={logo} alt="" srcSet="" />
        <NomeLogo>
          IAcademy <SpanNome>Premium</SpanNome>
        </NomeLogo>
      </DivLogo>
      <TituloForm>Crie sua conta gratuitamente</TituloForm>
      <LabelInput>Nome Completo*</LabelInput>
      <Input
        type="text"
        onChange={(e) => {
          setNomeCompleto(e.target.value);
        }}
        value={nomeCompleto}
      />
      <ErroMessage>{erroNomeCompleto}</ErroMessage>
      <LabelInput>Nome de Usuário*</LabelInput>
      <Input
        type="text"
        placeholder="@"
        onChange={(e) => {
          setNomeUsuario(e.target.value);
        }}
        value={nomeUsuario}
      />
      <ErroMessage>{erroNomeUsuario}</ErroMessage>
      <LabelInput>Email*</LabelInput>
      <Input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <ErroMessage>{erroEmail}</ErroMessage>
      <LabelInput>Senha*</LabelInput>
      <InputContainer>
        <InputPassword
          type={mostrarSenha1 ? "text" : "password"}
          onChange={(e) => {
            setSenha(e.target.value);
          }}
          value={senha}
        />
        {mostrarSenha1 ? (
          <FaEyeCustom as={FaEye} onClick={verSenha1} />
        ) : (
          <FaEyeCustom onClick={verSenha1} />
        )}
      </InputContainer>
      <ErroMessage>{erroSenha}</ErroMessage>
      <LabelInput>Repita sua senha*</LabelInput>
      <InputContainer>
        <InputPassword
          type={mostrarSenha2 ? "text" : "password"}
          onChange={(e) => {
            setSenhaRepitida(e.target.value);
          }}
          value={senhaRepitida}
        />
        {mostrarSenha2 ? (
          <FaEyeCustom as={FaEye} onClick={verSenha2} />
        ) : (
          <FaEyeCustom onClick={verSenha2} />
        )}
      </InputContainer>
      <ErroMessage>{erroSenhaRepitida}</ErroMessage>
      <Termos>
        Ao se cadastrar, você aceita os <a href="#">nossos termos de uso</a> e
        nossa <a href="#">política de privacidade</a>
      </Termos>
      <BtnCriar onClick={criarConta}>Criar Conta</BtnCriar>
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
export default FormCadastro;
