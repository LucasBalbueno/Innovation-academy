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
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route path="" element={<HomeContent />} />
          <Route path="feedbacks" element={<FeedbackForms />} />
          <Route path="cursos" element={<CoursesView />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="comunidade" element={<Community />} />
          <Route path="config" element={<ConfigAccount />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
