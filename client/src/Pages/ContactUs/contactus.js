import React, { useState } from "react";
import "./contactus.css";

export default function ContactUs(){
  return (
    <div className="register__form">
      <div className="form__wrapper">
        <div className="left">
          <h1>Contact Us</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
          </p>
          <form action="">
            <div className="form_group">
              <input
                name="name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="form_group">
              <input
                name="email"
                type="email"
                placeholder="Enter Email"
              />
            </div>
            <div className="form_group">
              <input
                name="contact"
                type="text"
                placeholder="Enter Contact Number"
              />
            </div>
            <div className="form_group">
              <input
                name="Message"
                type="text"
                placeholder="Enter your Query or Feedback"
              />
            </div>

            <button type="submit" className="submit_btn">
              Send Query
            </button>
          </form>
        </div>
        <div className="right">
          <img src="/Asset/contact.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};




