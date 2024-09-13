
import Login from "./Pages/Login"
import './Styles/Global.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Materiais from "./Pages/Materiais";
import Events from "./Pages/Events";
import Forum from "./Pages/Forum";
import Agenda from "./Pages/Agenda";
import Community from "./Pages/Community";
import Helper from "./Pages/Helper";
import UserProfile from "./Pages/UserProfile";
import Cursos from './Pages/Cursos';
import HomeContent from './Components/HomeContent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/home" element={<HomeContent/>} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/materiais" element={<Materiais />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/forum" element={<Forum />} />
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
