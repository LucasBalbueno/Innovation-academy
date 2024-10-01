import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from "../../Layout/SideBar";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import '../../../Styles/Global.css';
import '../../../Styles/Grid-Tamplate.css';

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
    <div className={`home-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Header setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`content ${isSidebarOpen ? 'content-shifted' : ''}`}>
        <Outlet />
      </div>
      {/* <Footer className="footer"/> */}
    </div>
  );
}

export default Home;
