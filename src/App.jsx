import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import PasswordRecovery from "./Components/Pages/PasswordRecovery/PasswordRecovery";
import ProtectedRoute from "./Components/ProtectedRoute";
import Home from "./Components/Pages/Home/Home";
import HomeContent from "./Components/HomeContent";
import Community from "./Components/Pages/Community/Community";
import Agenda from "./Components/Pages/Schedule/Agenda";
import ConfigAccount from "./Components/Configuration/ConfigAccount";
import { FeedbackForms } from "./Components/HomeContent/FeedbackForms";
import CoursesView from "./Components/Pages/Courses/CoursesView";
import UserProfile from "./Components/Pages/Profile/UserProfile";
import CourseCSSView from "./Components/Pages/Courses/components/CSS/CourseCSSView";
import CourseHTMLView from "./Components/Pages/Courses/components/HTML/CourseHTMLView";
import CourseJavaView from "./Components/Pages/Courses/components/JAVA/CourseJavaView";
import CourseJSView from "./Components/Pages/Courses/components/JAVASCRIPT/CourseJSView";
import CourseNodeView from "./Components/Pages/Courses/components/NODEJS/CourseNodeView";
import CoursePythonView from "./Components/Pages/Courses/components/PYTHON/CoursePythonView";
import CourseReactView from "./Components/Pages/Courses/components/REACTJS/CourseReactView";
import CourseSASSView from "./Components/Pages/Courses/components/SASS/CourseSASSView";


function App() {
  return (
    <Router>
      <Routes>
        {/* Rota de Login */}
        <Route path="/" element={<Login />} />

        {/* Rota de recuperação de senha */}
        <Route path="/login/password_recovery" element={<PasswordRecovery />} />

        {/* Rota Home com Outlet para páginas internas, protegida por ProtectedRoute */}
        <Route
          path="/home"
          element={
            // <ProtectedRoute>

            <Home />
            // </ProtectedRoute>
          }
        >
          <Route path="" element={<HomeContent />} />
          <Route path="feedbacks" element={<FeedbackForms />} />
          <Route path="cursos" element={<CoursesView />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="comunidade" element={<Community />} />
          <Route path="config" element={<ConfigAccount />} />
          <Route path="profile" element={<UserProfile />} />

          <Route path="cursos/html" element={<CourseHTMLView />} />
          <Route path="cursos/css" element={<CourseCSSView />} />
          <Route path="cursos/javascript" element={<CourseJSView />} />
          <Route path="cursos/java" element={<CourseJavaView />} />
          <Route path="cursos/python" element={<CoursePythonView />} />
          <Route path="cursos/nodejs" element={<CourseNodeView />} />
          <Route path="cursos/sass" element={<CourseSASSView />} />
          <Route path="cursos/reactjs" element={<CourseReactView />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
