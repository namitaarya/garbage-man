import React, { useEffect, useState } from "react";
import "./navbar.scss";
// import Logo from 'D:/garbage-man/client/src/assets/logo.png'

const NavBar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    fetch("http://localhost:1337/isAuthenticated", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) =>
        data.isLoggedIn
          ? setIsLoggedIn(true)
          : setIsLoggedIn(false)
      );
  }, []);

  let x = ["navbar"];
  if (scrolled) {
    x.push("scrolled");
  }

  return (
    <header className={x.join(" ")}>
      <div className="logo">
        <img src="./Asset/logo.png" alt="Logo" title="Logo" />
        <div className="text">
          <h1>Garbage Man</h1>
        </div>
      </div>
      {/* no css given yet to text */}

      <nav className="navigation center-list">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/aboutus">About Us</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
          </ul>
        </nav>

          {isLoggedIn ? (
            <li className="logout">
              <button onClick={logout}>Logout</button>
            </li>
          ) : (
            <div class="dropdown">
              <button class="dropbtn">SignIn/SignUp</button>
              <div class="dropdown-content">
                <a href="/login-user">Sign In</a>
                <a href="/register-user">Sign Up</a>
              </div>
            </div>
          )}
    </header>
  );
};

export default NavBar;
