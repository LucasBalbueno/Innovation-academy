import { useState } from 'react'; // Import useState para controlar o estado
import { FaBars } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import styled from 'styled-components';
import { FaFire } from "react-icons/fa";
import '../../Styles/Global.css';
import profileIcon from './Images/Perfil-Avatar/avatar-1.jpg'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--background-color);
  border-bottom: 1px solid var(--gray-color);
  color: var(--text-color);
  z-index: 10000;
  width: 100vw;
  height: 100px;
  box-sizing: border-box;

  @media screen and (max-width: 767px){
      padding: 10px;
  }

`;

const DivOne = styled.div`
  display: flex;
  gap: 1rem;
  background: transparent;
  padding-left: 2rem;
  align-items: center;

  @media screen and (max-width: 991px){
      padding-left: 0;
  }
`;

const H1 = styled.h1`
  font-size: 24px;
  font-family: var(--font-poopins);
  background: transparent;
  margin: 0;

   @media screen and (max-width: 767px){
      font-size: 1rem;
  }
`;

const Span = styled.span`
  color: var(--contrast-color);
  background: transparent;
`;

const DivTwo = styled.div`
  background-color: transparent;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-right: 1rem;

   @media screen and (max-width: 991px){
      padding-right: 0;
  }
`;

const Profile = styled.button`
  background: transparent;
  border: none;

    @media screen and (max-width: 767px){
    display: none;
  }
`;

const Score = styled.button`
  display: flex;
  gap: 10px;
  background-color: var(--gray-color);
  border-radius: 10px;
  padding: 10px;
  align-items: center;
  border: none;
  color: var(--text-color);
`;

const Painel = styled.span`
  font-size: 18px;
  font-family: var(--font-poopins);
  background: transparent;
`;

const MenuIcon = styled.button`
  font-size: 24px;
  cursor: pointer;
  color: var(--contrast-color);
  border: none;
  background: transparent;
  padding: 0;
`;

function Header({ setIsSidebarOpen, setIsPopupProfileOpen }) {
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev); // Alterna o estado
  };

  const handlePopupProfile = () => {
    setIsPopupProfileOpen(prev => !prev)
  }

  return (
    <HeaderContainer>
      <DivOne>
        <MenuIcon onClick={toggleSidebar}>
          <FaBars />
        </MenuIcon>
        <H1>IAacademy <Span>Premium</Span></H1>
      </DivOne>

      <DivTwo>
        <Score><FaFire style={{ background: 'transparent' }} size={20} color='var(--contrast-color)' /><Painel>0</Painel></Score>
        <Profile onClick={handlePopupProfile}>
          <img
            src={profileIcon}
            alt="Profile"
            style={{
              borderRadius: '50%',
              width: '50px',
              border: '5px solid #00FF7E'
            }} />
        </Profile>

      </DivTwo>
    </HeaderContainer>
  );
}

export default Header;
