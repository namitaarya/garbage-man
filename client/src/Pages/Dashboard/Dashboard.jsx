import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:1337/isAuthenticated", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) =>
        data.isLoggedIn ? navigate("/dashboard") : navigate("/login-user")
      );
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate('/')
  };
  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Dashboard;
