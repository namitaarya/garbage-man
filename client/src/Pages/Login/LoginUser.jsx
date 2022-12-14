import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/login-user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      }),
    });

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login Successful ");
      // navigate('/dashboard')
      window.location.href = '/dashboard'
    } else {
      alert("Please check your username and password");
    }
  };

  return (
    <div className="register__form login_form">
      <div className="form__wrapper">
        <div className="left">
          <h1>Login</h1>
          <p>
            The common denominator of all these technologies is their capacity
            to produce steam using the residual heat from the gases generated by
            the processes described above.
          </p>
          <form action="" onSubmit={handleSubmit}>
            <div className="form_group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
              />
            </div>
            <div className="form_group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
              />
            </div>

            <button type="submit" className="submit_btn">
              Login
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

export default LoginUser;
