import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../../../Context/ThemeContext';
import { Outlet } from 'react-router-dom';
import Sidebar from "../../Layout/SideBar";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import '../../../Styles/Global.css';
import '../../../Styles/Grid-Template.css';
import { decodeJwt } from "jose";
import axios from 'axios';

import { PopupProfile } from '../../Layout/PopupProfile';

function Home() {
  const { theme, handleThemeChange } = useContext(ThemeContext);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [ isPopUpProfileOpen, setIsPopUpProfileOpen ] = useState(false);

  const [ themeAPI, setThemeAPI ] = useState('DARK');
  const [ textSize, setTextSize ] = useState('SMALL');
  const [ notifications, setNotifications ] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    const root = document.documentElement;

    switch (textSize) {
        case 'SMALL':
            root.style.setProperty('--font-size-multiplier', '1');
            break;
        case 'DEFAULT':
            root.style.setProperty('--font-size-multiplier', '1.2');
            break;
        case 'LARGE':
            root.style.setProperty('--font-size-multiplier', '1.3');
            break;
        default:
            root.style.setProperty('--font-size-multiplier', '1');
    }
}, [textSize]);
    
useEffect(() => {
    handleThemeChange(themeAPI === 'DARK' ? 'dark' : 'light');
}, [themeAPI]);

useEffect(() => {
  (async () => {
    try {
      const token = localStorage.getItem("jwt");
      const decoded = decodeJwt(token);
      const response = await axios.get(`http://localhost:8080/api/users/by-email?email=${decoded.sub}`);
      
      const responsePreferences = await axios.get(`http://localhost:8080/api/preferences/user/${response.data.userId}`);
      console.log(responsePreferences.data)
        setThemeAPI(responsePreferences.data.theme);
        setTextSize(responsePreferences.data.textSize);
      } catch (error) {
          Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: 'Não foi possível carregar os dados do usuário.',
          confirmButtonText: 'OK'
          });
      }
  })();
}, []);

  return (
    <>
      <div className={`home-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Header setIsSidebarOpen={setIsSidebarOpen} setIsPopupProfileOpen={setIsPopUpProfileOpen} />
        <Sidebar isOpen={isSidebarOpen} />
        <div className={`content ${isSidebarOpen ? 'content-shifted' : ''}`}>
          <PopupProfile isPopUpProfileOpen={isPopUpProfileOpen} setIsPopupProfileOpen={setIsPopUpProfileOpen} />
          <Outlet />
          
        </div>
      </div>
      <Footer className="footer"/>
      
    </>
  );
}

export default Home;
