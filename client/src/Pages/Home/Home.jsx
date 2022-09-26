import React from "react";
import Header from "./Header";
import "./home.css";
import Stats from "./Stats";
import Wastes from "./Wastes";
import Counter from "./counter";
import Testimonials from "./Testimonials";
import { Partners } from "../../components";

const Home = () => {
  
  return (
    <div className="home">
      <Header />
      <Wastes />
      <Counter />
      <Stats />      
      <Testimonials />
      <Partners />
    </div>
  );
};

export default Home;
