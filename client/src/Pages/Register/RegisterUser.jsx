import React, { useState } from "react";
import "./register.css";

const RegisterUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  const [role, setRole] = useState("CITIZEN");

  const [records, setRecords] = useState([]);
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecord = { ...userData };
    setRecords([...records, newRecord]);
    setUserData({ name: "", email: "", contact: "", password: "" });

    const apiCall =
      role === "CITIZEN"
        ? "http://localhost:1337/register-user"
        : "http://localhost:1337/register-collector";
        
    const response = await fetch(apiCall, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    console.log(data);
    if (data.status === "ok") {
      window.location.href = "/login-user";
    }
  };

  return (
    <div className="register__form">
      <div className="form__wrapper">
        <div className="left">
          <h1>Register Now</h1>
          <p>
            The common denominator of all these technologies is their capacity
            to produce steam using the residual heat from the gases generated by
            the processes described above.
          </p>
          <form action="" onSubmit={handleSubmit}>
            <div className="form_group">
              <input
                name="name"
                type="text"
                value={userData.name}
                onChange={handleInput}
                placeholder="Enter User Name/Organization Name"
              />
            </div>
            <div className="form_group">
              <input
                name="email"
                type="email"
                value={userData.email}
                onChange={handleInput}
                placeholder="Enter Email"
              />
            </div>
            <div className="form_group">
              <input
                name="contact"
                type="text"
                value={userData.contact}
                onChange={handleInput}
                placeholder="Enter Contact Number"
              />
            </div>
            <div className="form_group">
              <input
                name="password"
                type="password"
                value={userData.password}
                onChange={handleInput}
                placeholder="Enter Password"
              />
            </div>

            <div className="form_group">
              <select
                name="role"
                id=""
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                  console.log(role);
                }}
              >
                <option value="CITIZEN">Citizen</option>
                <option value="COLLECTOR">Collector</option>
              </select>
            </div>

            <button type="submit" className="submit_btn">
              Register
            </button>
          </form>
        </div>
        <div className="right">
          <img src="/Asset/form_banner.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
