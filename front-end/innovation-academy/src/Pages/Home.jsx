import { Outlet } from 'react-router-dom'; // Importa o Outlet
import Sidebar from "../Components/SideBar";
import Header from "../Components/Header";
import '../Styles/Global.css';
import '../Styles/Grid-Tamplate.css';

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
