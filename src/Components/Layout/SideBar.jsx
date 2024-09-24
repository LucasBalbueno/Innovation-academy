import styled from 'styled-components';
import routes from '../../Rotas/Routes';
import { Link } from 'react-router-dom';
import '../../Styles/Global.css';

const SidebarContainer = styled.div`
  border-right: 1px solid grey;
  position: fixed;
  margin-top: 100px;
  width: 250px;
  height: 100vh;
  
  background-color: #444;
  color: #fff;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')}; /* Animação */
  z-index: 100000;
`;

const Menu = styled.ul`
  list-style-type: none;
  padding: 1rem;
`;

const MenuItem = styled.li`
  padding: 1rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  font-family: var(--font-poopins);
  

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      background-color: #222226;
      border-radius: 10px;
      
    }
  }
`;

const Icon = styled.span`
  margin-right: 1rem;
`;

const Sidebar = ({isOpen}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Menu>
        {routes.map((route) => (
          <MenuItem key={route.path}>
            <Link to={route.path}>
              <Icon>{route.icon}</Icon>
              {route.name}
            </Link>
          </MenuItem> 
        ))}
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;
