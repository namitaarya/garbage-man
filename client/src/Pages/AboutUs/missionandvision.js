import React, { useState } from "react";
import { aboutData } from "./dataMissionVision";
import MainCompAbout from "./aboutuscomp";

const Mission = () => {
  const [activeTab, setActiveTab] = useState("Our Mission");
  const [currIdx, setCurrIdx] = useState(0);
  const handleClick = (option, idx) => {
    setActiveTab(option);
    setCurrIdx(idx);
    console.log(idx);
    changeComponent(idx);
  };
  const changeComponent = (idx) => {
    return <MainCompAbout data={aboutData[idx]} idx={idx} />;
  };
  return (
    <div className="wastes" style={{margin: '4em auto'}}>
      <h1>Our mission and Vision</h1>
      <div className="waste__container">
        <div
          className="waste_btn_container"
          style={{
            justifyContent: "center",
            width: "50%",
            margin: "2em auto",
            gap: "2em",
          }}
        >
          {aboutData.map((item, idx) => (
            <div
              className={activeTab === item.title ? "active btn" : "btn"}
              style = {{width: '15%'}}
              key={idx}
              onClick={() => handleClick(item.title, idx)}
            >
              <img src={item.icon} alt="" />
              <h5>{item.title}</h5>
            </div>
          ))}
        </div>
        {changeComponent(currIdx)}
      </div>
    </div>
  );
};

export default Mission;
