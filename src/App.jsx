
import Login from "./Components/Login/Login"
import './Styles/Global.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Materiais from "./Components/Pages/Materiais";
import Events from "./Components/Pages/Events";
import Agenda from "./Components/Pages/Agenda";
import Community from "./Components/Pages/Community";
import Helper from "./Components/Pages/Helper";
import UserProfile from "./Components/Pages/UserProfile";
import Cursos from './Components/Pages/Cursos';
import HomeContent from './Components/HomeContent';

import Home from "./Components/Pages/Home.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="/home" element={<Home/>} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/materiais" element={<Materiais />} />
          <Route path="/eventos" element={<Events />} />
         
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/comunidade" element={<Community />} />
          <Route path="/ajuda" element={<Helper />} />
          <Route path="/perfil" element={<UserProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
