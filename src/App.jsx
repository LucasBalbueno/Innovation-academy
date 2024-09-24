import Login from "./Components/Login/Login";
import './Styles/Global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Events from "./Components/Pages/Events/Events";
import Agenda from "./Components/Pages/Schedule/Agenda";
import Helper from "./Components/Pages/Helper/Helper";
import UserProfile from "./Components/Pages/Profile/UserProfile";
import CoursesView from './Components/Pages/Courses/CoursesView';
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota de Login */}
        <Route path="/" element={<Login />} />
        
        {/* Rota Home com Outlet para páginas internas */}
        <Route path="/home" element={<Home />}>
          <Route path="cursos" element={<CoursesView />} />
          <Route path="eventos" element={<Events />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="ajuda" element={<Helper />} />
          <Route path="perfil" element={<UserProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
