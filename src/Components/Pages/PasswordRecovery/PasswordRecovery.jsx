import styled from "styled-components";

const Body = styled.div`
  background-color: var(--main-color);
  font-family: var(--font-poopins);
  height: 100dvh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  background-color: rgb(27, 27, 31);
  border-radius: 10px 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  padding: 1%;
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
  border-radius: 5px 5px 5px;

  &:focus {
    border-color: var(--contrast-color);
    outline: none;
  }
`;

const Button = styled.button`
  background-color: var(--contrast-color);
  border: none;
  padding: 3%;
  font-family: var(--font-poopins);
  color: var(--text-color);
  border-radius: 5px 5px 5px;
  font-size: 15px;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: var(--contrast-color-hover);
  }
`;

function PasswordRecovery() {
  return (
    <Body>
      <Content>
        <Title>Altere sua senha</Title>
        <InputContent>
          <LabelInput>Nova senha</LabelInput>
          <Input></Input>
          <LabelInput>Repita sua senha</LabelInput>
          <Input></Input>
        </InputContent>
        <Button>Alterar</Button>
      </Content>
    </Body>
  );
}
export default PasswordRecovery;
