import Login from "./Components/Login/Login";
import './Styles/Global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Events from "./Components/Pages/Events/Events";
import Agenda from "./Components/Pages/Schedule/Agenda";
import Helper from "./Components/Pages/Helper/Helper";
import UserProfile from "./Components/Pages/Profile/UserProfile";
import CoursesView from './Components/Pages/Courses/CoursesView';
import CourseHTMLView from './Components/Pages/Courses/Components/HTML/CourseHTMLView';
import CourseCSSView from './Components/Pages/Courses/Components/CSS/CourseCSSView';
import CourseJavaView from './Components/Pages/Courses/Components/JAVA/CourseJavaView';
import CourseJSView from './Components/Pages/Courses/Components/JAVASCRIPT/CourseJSView';
import CourseNodeView from './Components/Pages/Courses/Components/NODEJS/CourseNodeView';
import CoursePythonView from './Components/Pages/Courses/Components/PYTHON/CoursePythonView';
import CourseReactView from './Components/Pages/Courses/Components/REACTJS/CourseReactView';
import CourseSASSView from './Components/Pages/Courses/Components/SASS/CourseSASSView';
import Home from "./Components/Pages/Home/Home";
import HomeContent from "./Components/HomeContent";
import Community from "./Components/Pages/Community/Community";
import ConfigAccount from "./Components/Configuration/ConfigAccount";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota de Login */}
        <Route path="/" element={<Login />} />
        
        {/* Rota Home com Outlet para páginas internas */}
        <Route path="/home" element={<Home />}>
          <Route path="" element={<HomeContent />} />
          <Route path="cursos" element={<CoursesView />} />
          <Route path="eventos" element={<Events />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="comunidade" element={<Community />} />
          <Route path="ajuda" element={<Helper />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="cursos/html" element={<CourseHTMLView />} />
          <Route path="cursos/css" element={<CourseCSSView />} />
          <Route path="cursos/javascript" element={<CourseJSView />} />
          <Route path="cursos/reactjs" element={<CourseReactView />} />
          <Route path="cursos/nodejs" element={<CourseNodeView />} />
          <Route path="cursos/java" element={<CourseJavaView />} />
          <Route path="cursos/python" element={<CoursePythonView />} />
          <Route path="cursos/sass" element={<CourseSASSView />} />
          <Route path="perfil" element={<UserProfile />} />
          <Route path="configuracoes" element={<ConfigAccount />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
