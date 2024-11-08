import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("jwt");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return <>{children}</>;
}

export default ProtectedRoute;
