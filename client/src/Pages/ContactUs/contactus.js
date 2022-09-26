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
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.8439304759995!2d77.2292465141924!3d28.66439138939098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0683919c3b%3A0xf5fc331b74c2b9e2!2sIndira%20Gandhi%20Delhi%20Technical%20University%20for%20Women!5e0!3m2!1sen!2sin!4v1664214789224!5m2!1sen!2sin"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          {/* <img src="/Asset/contact.jpg" alt="" /> */}
        </div>
      </div>
    </div>
  );
};




