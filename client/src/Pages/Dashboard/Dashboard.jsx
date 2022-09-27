import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PreviousPickup, RequestPickup } from "../../components";

import "./dash.css";

const Dashboard = () => {
  const [currTab, setCurrTab] = useState('Request Pickup')
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

  const changeTab = (option) => {
    switch (option) {
      case 'Request Pickup': return <RequestPickup />
      case 'Previous Pickup': return <PreviousPickup />
    }
  }

  return (
    <div className="dashboard">
      <h1 className="head">User Dashboard</h1>
      <div className="btn_container">
        <div className="btn" onClick={() => {setCurrTab('Request Pickup')}}>Request Pickup</div>
        <div className="btn" onClick={() => {setCurrTab('Previous Pickup')}}>Previous Pickups</div>
      </div>
      {
        changeTab(currTab)
      }
      {/* <RequestPickup /> */}
    </div>
  );
};

export default Dashboard;
