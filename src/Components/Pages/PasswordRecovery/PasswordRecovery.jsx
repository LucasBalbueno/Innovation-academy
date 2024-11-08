import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import * as jwt_decode from "jwt-decode";

const Body = styled.div`
  background-color: var(--main-color);
  /* font-family: var(--font-poopins); */
  height: 100dvh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: rgb(27, 27, 31);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  padding: 2%;
  height: fit-content;
`;

const Title = styled.p`
  color: rgb(9, 189, 96);
  font-size: 1.5rem;
`;

const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const LabelInput = styled.p`
  color: rgb(9, 189, 96);
  font-size: 1rem;
`;

const Input = styled.input`
  color: var(--text-color);
  width: 100%;
  background-color: var(--main-color);
  border: 1px solid transparent;
  padding: 3%;
  border-radius: 5px;

  &:focus {
    border-color: var(--contrast-color);
    outline: none;
  }
`;

const ErroSenha = styled.span`
  color: red;
  font-size: 0.8rem !important;
`;

const Button = styled.button`
  background-color: var(--contrast-color);
  border: none;
  padding: 3%;
  margin-top: 3%;
  font-family: var(--font-poopins);
  color: var(--text-color);
  border-radius: 5px;
  font-size: 15px;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: var(--contrast-color-hover);
  }
`;

function PasswordRecovery() {
  const [senha, setSenha] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [senhaIgual, setSenhaIgual] = useState("");
  const [erroSenhaIgual, setErroSenhaIgual] = useState("");
  const [senhaAlterada, setSenhaAlterada] = useState(false);
  const [validToken, setValidToken] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Substitua useHistory por useNavigate

  // Função para verificar se o token é válido
  const verificarToken = async (token) => {
    try {
      const decoded = await jwt_decode(token);
      const now = Date.now() / 1000; // Tempo atual em segundos
      if (decoded.exp > now) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  };

  // Extrair o token da URL
  useEffect(() => {
    const token = new URLSearchParams(location.search).get("token");
    if (token) {
      if (verificarToken(token)) {
        setValidToken(true);
      } else {
        setValidToken(false);
      }
    }
  }, [location.search]);

  const alterarSenha = () => {
    setErroSenha("");
    setErroSenhaIgual("");
    if (senha == "") {
      setErroSenha("Campo obrigatório!");
      return;
    }
    if (senhaIgual == "") {
      setErroSenhaIgual("Campo obrigatório!");
      return;
    }
    if (senhaIgual !== senha) {
      setErroSenhaIgual("As senhas não são iguais!");
      return;
    }
    setSenhaAlterada(true);
  };

  return (
    <Body>
      <Content>
        <Title>Altere sua senha</Title>
        {validToken ? (
          senhaAlterada ? (
            <p>Senha alterada, você ja pode fechar essa página</p>
          ) : (
            <InputContent>
              <LabelInput>Nova senha</LabelInput>
              <Input
                type="password"
                onChange={(event) => {
                  setSenha(event.target.value);
                }}
              />
              <ErroSenha>{erroSenha}</ErroSenha>
              <LabelInput>Repita sua senha</LabelInput>
              <Input
                type="password"
                onChange={(event) => {
                  setSenhaIgual(event.target.value);
                }}
              />
              <ErroSenha>{erroSenhaIgual}</ErroSenha>
              <Button type="button" onClick={alterarSenha}>
                Alterar
              </Button>
            </InputContent>
          )
        ) : (
          <p>O tempo para alteração de senha expirou! Solicite um novo link.</p>
        )}
      </Content>
    </Body>
  );
}

export default PasswordRecovery;
