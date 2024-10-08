import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import routes from '../../Rotas/Routes';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../Styles/Global.css';

const SidebarContainer = styled.div`
  border-right: 1px solid grey;
  position: fixed;
  top: 100px;
  left: 0;
  width: 250px;
  height: calc(100vh - 100px);
  background-color: #444;
  color: #fff;
  z-index: 1000;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};


  @media screen and (max-width: 991px){
     height: 100vh;
  }
`;

const Menu = styled.ul`
  list-style-type: none;
  padding: 1rem;
`;

const MenuItem = styled.li`
  margin-bottom: .5rem;
  cursor: pointer;
  font-family: var(--font-poopins);
  background-color: ${({ isActive }) => (isActive ? '#222226' : 'transparent')};
  border-radius: ${({ isActive }) => (isActive ? '10px' : '0')};
  color: ${({ isActive }) => (isActive ? '#00FF7E' : '#fff')};

  &:hover {
    background-color: #222226;
    border-radius: 10px;
    transition: all .5s;
  }

  &:nth-child(5) {
    margin-top: 6rem;
  }
`;

const Icon = styled.span`
  margin-right: 1rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  padding: 1rem;

  &:hover {
    color: #00FF7E;
  }

  @media screen and (max-width: 991px){
    padding: 10px
  }
`;

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  padding: 1rem;

  &:hover {
    color: #00FF7E;
  }

  @media screen and (max-width: 991px){
    padding: 10px
  }
`;

const Sidebar = ({ isOpen }) => {
  const location = useLocation();
  const navigate = useNavigate(); // Use navigate
  const [activeRoute, setActiveRoute] = useState('/home'); // Rota padrão

  useEffect(() => {
    // Verifica se a rota atual é a raiz e redireciona para /home
    if (location.pathname === '/') {
      setActiveRoute('/home');
    } else {
      setActiveRoute(location.pathname);
    }
  }, [location]);

  const handleCommunityClick = () => {
    setActiveRoute(null); // Remove a classe activeRoute
    navigate('/home'); // Navega para a rota /home
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <Menu>
        {routes.map((route) => (
          <MenuItem key={route.path || route.href} isActive={activeRoute === route.path}>
            {route.href ? (
              <ExternalLink
                href={route.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCommunityClick}
              >
                <Icon>{route.icon}</Icon>
                {route.name}
              </ExternalLink>
            ) : (
              <StyledLink
                to={route.path}
                onClick={() => setActiveRoute(route.path)}
              >
                <Icon>{route.icon}</Icon>
                {route.name}
              </StyledLink>
            )}
          </MenuItem>
        ))}
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;
