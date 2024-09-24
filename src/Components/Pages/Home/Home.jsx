import { Outlet } from 'react-router-dom';
import Sidebar from "../../Layout/SideBar";
import Header from "../../Layout/Header";
import '../../../Styles/Global.css';
import '../../../Styles/Grid-Tamplate.css';

function Home() {
  return (
    <div className="home-container">
      <Header className='header' />
      <Sidebar className='sidebar' />
      <div className="content">
        <Outlet /> 
      </div>
      
    </div>
  );
}

export default Home;
