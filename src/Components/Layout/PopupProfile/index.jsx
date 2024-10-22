import { Container, StyledViewProfileLink } from './style';
import profileIcon from '../Images/Perfil-Avatar/avatar-1.jpg';
import LeaveIcon from '../Images/Perfil-Avatar/LeaveIcon.png';
import ConfigIcon from '../Images/Perfil-Avatar/ConfigIcon.png'

import { Link } from 'react-router-dom';

export function PopupProfile ({ isPopUpProfileOpen, setIsPopupProfileOpen }) {
    const handleClosePopUp = () => {
        setIsPopupProfileOpen(false);
    }

    return (
        <Container className={isPopUpProfileOpen ? "popupProfile-open" : "popupProfile-close"}>
            <div className='popupHeader'>
                <div className='profileTitle'>
                    <img
                    src={profileIcon}
                    alt="Profile"
                    style={{
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    border: '5px solid #00FF7E'
                    }} />

                    <div>
                        <h4>Nome Completo</h4>
                        <span>@usuario123</span>
                    </div>
                </div>
            
                <div>
                    <StyledViewProfileLink to={'profile'} onClick={handleClosePopUp}>
                        Ver Perfil
                    </StyledViewProfileLink>
                </div>
            </div>

            <div className='popupOptions'>
                <Link className='StyledLinkOptions' to={'config'} onClick={handleClosePopUp}>
                    <img src={ConfigIcon} alt="Icone de configurações" />
                    <p>Configurações e Preferências</p>
                </Link>

                <Link className='StyledLinkOptions' onClick={handleClosePopUp}>
                    <img src={LeaveIcon} alt="Icone de Sair" />
                    <p className='exitText'>Sair da conta</p>
                </Link>
            </div>
        </Container>
    )
}