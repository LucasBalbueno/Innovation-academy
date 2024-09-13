import styled from "styled-components";
import logoNome from "../Images/Login/LogoNome.png";
import iconeGithub from "../Images/Login/github-icon.png";
import quebraLinha from "../Images/Login/quebra-linha.png";


const LogoNome = styled.img`
  width: 60%;
  padding-bottom: 8%;
`;

const TituloForm = styled.span`
  font-size: 1rem;
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

const Termos = styled.span`
  width: fit-content;
  color: white;
  padding-bottom: 3%;
  transition: 0.3s ease;
  font-size: 12px;

  a{
    text-decoration: none;
    color: white;
    font-weight: bold;
  }

`;

const BtnCriar = styled.button`
  background-color: RGB(10, 189, 98);
  border: none;
  padding: 3%;
  font-family: "Poppins", sans-serif;
  margin-bottom: 3%;
  color: white;
  border-radius: 5px 5px 5px;
  font-size: 15px;
  transition: 0.3s ease;

  &:hover {
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

const QuebraLinha = styled.img`
  margin-top: 3%;
`;

function FormCadastro() {
  return (
    <>
      <LogoNome src={logoNome} alt="" srcSet="" />
      <TituloForm>Crie sua conta gratuitamente</TituloForm>
      <LabelInput>Nome</LabelInput>
      <Input type="text" />
      <LabelInput>Email</LabelInput>
      <Input type="text" />
      <LabelInput>Senha</LabelInput>
      <Input type="password" />
      <LabelInput>Repita sua senha</LabelInput>
      <Input type="password" />
      <Termos>Ao se cadastrar, você aceita os <a href="#">nossos termos de uso</a> e nossa <a href="#">política de privacidade</a></Termos>
      <BtnCriar>Criar Conta</BtnCriar>
      <DivBtnGithub>
        <span>Ou se preferir</span>
        <BtnGithub>
          <IconeGithub src={iconeGithub} alt="" srcSet="" />
          Entre com o Github
        </BtnGithub>
      </DivBtnGithub>
      <QuebraLinha src={quebraLinha} alt="" srcSet="" />
    </>
  );
}
export default FormCadastro;
