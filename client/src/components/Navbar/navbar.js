import React, { useState, useEffect } from "react";
import "./navbar.scss";
// import Logo from 'D:/garbage-man/client/src/assets/logo.png'

const NavBar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

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

        <nav className="navigation">
          <ul>
          <li className="dropdown">
            <a href="/">SignIn / SignUp</a>
            <div className="dropdown-content">
              <a href="/login-user">Sign In</a>
                <a href="/register-user">Sign Up</a>
            </div>
          </li>
       </ul>
      </nav>
    </header>
  );
};

export default NavBar;
