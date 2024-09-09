import styled from 'styled-components'
import logo from '../Images/Logo.png'
import '../Styles/Global.css'

import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";

const Container = styled.div `
background: #3d3d3dca;
width: 100vw;
height: 538px;
display: flex;
flex-direction: column;

`
const BoxOne = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
height: 80%;

@media (max-width: 1070px) {
    flex-direction: column;
    font-size: 16px;
    padding: 20px;
    justify-content: center;
    gap: 2rem;
  }
@media (max-width: 470px) {
    font-size: 12px;
    padding: 10px;
  }

`
const Logoname = styled.div`
display: flex;
align-items: center;
gap: 24px;
margin-bottom:40px;
`
const Name = styled.p`
color: #f5f5ff;
font-size: 32px;
font-family: var(--font-paytone-one);

@media (max-width: 470px) {
    font-size: 14px;
  }
`
const Span = styled.span `
color: #00ff7e;
`
const BoxTwo = styled.div`
width: 100%;
background-color: #1e1e1e;
height: 120px;
color: #ffff;
align-items: center;
justify-content: center;
display: flex;
font-size: 18px;
font-family: var(--font-poopins);

@media (max-width: 1070px) {
    font-size: 16px;
    
    
  }
@media (max-width: 470px) {
    font-size: 14px;
  }

`
const Logo = styled.img `
width: 90px;
height: 90px;
@media (max-width: 1070px) {
    width: 60px;
    height: 60px;
  }

@media (max-width: 470px) {
    width: 40px;
    height: 40px;
  }
`
const Subject = styled.p`
color: #f5f5ff;
font-family: var(--font-poopins);
font-weight: 600;
`
const LinksUtillities = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 60px;
`
const Box = styled.div `

`
const Itens = styled.li `
list-style:none;
color: #f5f5ff;
font-family: var(--font-poopins);
font-size: 16px;
padding: 5px 0px;
`
const SocialMedias = styled.div `
display: flex;
flex-direction: column;
gap: 28px;

@media (max-width: 1070px) {
    flex-direction: row;
    
    
  }
@media (max-width: 470px) {
    flex-direction: row;
  }
`
const Redes = styled.div `
display: flex;
flex-direction: row;
gap: 24px;
@media (max-width: 1070px) {
    gap: 18px;
  }
@media (max-width: 470px) {
    gap: 16px;
  }
`
const RedesSociais = styled.a `
color: #f5f5ff;
`
const Button = styled.button `
border-radius: 30px;
background-color: #20c997;
padding: 10px 32px;
border: none;
color: #ffff;
font-family: var(--font-poopins);
font-weight: 500;

`

function Footer() {
  

    return (
      <>
      <Container>
        <BoxOne>
        <Logoname>
            <Logo src={logo} alt="" />
            <Name>I<Span>Academy Premium</Span></Name>
        </Logoname>
        <LinksUtillities>
        <Box>
            <Subject>Início</Subject>
            <Itens>Home</Itens>
            <Itens>Cursos</Itens>
            <Itens>Downloard</Itens>
        </Box>

        <Box>
        <Subject>Sobre Nós</Subject>
        <Itens>Informações da Empresa</Itens>
        <Itens>Contato</Itens>
        <Itens>Blog</Itens>
        </Box>

        <Box>
        <Subject>Suporte</Subject>
        <Itens>Informações da Empresa</Itens>
        <Itens>Contato</Itens>
        <Itens>Blog</Itens>
        </Box>
        </LinksUtillities>
        <SocialMedias>
            <Redes>
            <RedesSociais href="#"><IoLogoFacebook size={40}/></RedesSociais>
            <RedesSociais href="#"><IoLogoInstagram size={40}/></RedesSociais>
            <RedesSociais href="#"><IoLogoTwitter size={40}/></RedesSociais>
            </Redes>
            <Button>Contato</Button>
        </SocialMedias>

        </BoxOne>
        <BoxTwo>
        @2024 Copyright - I.Academy Premium
        </BoxTwo>
      </Container>
      </>
    )
  }
  
  export default Footer