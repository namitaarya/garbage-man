import React from "react";
import Header from "./Header";
import "./home.css";
import Stats from "./Stats";
import Wastes from "./Wastes";
import Counter from "./counter";
import Testimonials from "./Testimonials";

const Home = () => {
  
  return (
    <div className="home">
      <Header />
      <Wastes />
      <Counter />
      <Stats />      
      <Testimonials />
    </div>
  );
};

export default Home;
