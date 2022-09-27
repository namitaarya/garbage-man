import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Collector from "./Collector";
import "./dash.css";
import User from "./User";

const Dashboard = () => {
  const [role, setRole] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:1337/isAuthenticated", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.isLoggedIn) {
          setId(data.id);
          setRole(data.role);
          navigate("/dashboard");
        } else {
          navigate("/login-user");
        }
      });
  }, []);

  const renderDash = () => {
    if (role === "citizen") return <User userId={id} />;
    else if (role === "collector") return <Collector />;
  };

  return (
    <div className="dashboard__wrapper">
      <div className="dashboard">
        <h1 className="head">Dashboard</h1>
        {renderDash()}
      </div>
    </div>
  );
};

export default Dashboard;
