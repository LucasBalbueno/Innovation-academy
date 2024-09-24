import { useState } from 'react'; // Import useState para controlar o estado
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
// import userAvatar from '../Layout/Images/Perfil-Avatar/avatar-1.png';
import { FaFire } from "react-icons/fa";
import '../../Styles/Global.css';
import Sidebar from './SideBar'; // Importando o Sidebar

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #1A1A1E;
  border-bottom: 1px solid #3D3D3D ;
  color: #fff;
  z-index: 10000;
  width: 100vw;
  height: 100px;
`;

const DivOne = styled.div`
  display: flex;
  gap: 1rem;
  background: transparent;
  padding-left: 2rem;
`;

const H1 = styled.h1`
  font-size: 24px;
  font-family: var(--font-poopins);
  background: transparent;
`;

const Span = styled.span`
  color: #00FF7E;
  background: transparent;
`;

const DivTwo = styled.div`
  background-color: transparent;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-right: 1rem;
`;

const Profile = styled.button`
  background: transparent;
  border: none;
`;

const Score = styled.div`
  display: flex;
  gap: 10px;
  background-color: #3D3D3D;
  border-radius: 10px;
  padding: 10px;
  align-items: center;
`;

const Painel = styled.span`
  font-size: 18px;
  font-family: var(--font-poopins);
  background: transparent;
`;

const MenuIcon = styled.button`
  font-size: 24px;
  cursor: pointer;
  color: #00FF7E;
  border: none;
  background: transparent;
`;

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para controlar a visibilidade do Sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Alterna o estado de visibilidade
  };

  return (
    <>
      <HeaderContainer>
        <DivOne>
          <MenuIcon onClick={toggleSidebar}> {/* Adiciona o evento de clique */}
            <FaBars />
          </MenuIcon>
          <H1>IAacademy <Span>Premium</Span></H1>
        </DivOne>

        <DivTwo>
          <Score><FaFire style={{ background: 'transparent' }} size={20} color='#00FF7E' /><Painel>0</Painel></Score>
          <Profile>
            <img 
            // src={userAvatar} 
            alt="Profile" style={{
              borderRadius: '50%',
              width: '50px',
              border: '5px solid #00FF7E'
            }} />
          </Profile>
        </DivTwo>
      </HeaderContainer>

      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} />} {/* Renderiza o Sidebar se estiver aberto */}
    </>
  );
}

export default Header;
