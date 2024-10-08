import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from "../../Layout/SideBar";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import '../../../Styles/Global.css';
import '../../../Styles/Grid-Tamplate.css';

import { PopupProfile } from '../../Layout/PopupProfile';
import { PopupIntensive } from '../../Layout/PopupIntensive'

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [ isPopUpProfileOpen, setIsPopUpProfileOpen ] = useState(false);
  const [ isPopUpIntensiveOpen, setIsPopUpIntensiveOpen ] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className={`home-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Header setIsSidebarOpen={setIsSidebarOpen} setIsPopupProfileOpen={setIsPopUpProfileOpen} setIsPopUpIntensiveOpen={setIsPopUpIntensiveOpen} />
        <Sidebar isOpen={isSidebarOpen} />
        <div className={`content ${isSidebarOpen ? 'content-shifted' : ''}`}>
          <PopupProfile isPopUpProfileOpen={isPopUpProfileOpen}/>
          <PopupIntensive isPopUpIntensiveOpen={isPopUpIntensiveOpen} />
          <Outlet />
        </div>
      </div>
      
      {/* <Footer /> */}
    </>
  );
}

export default Home;
