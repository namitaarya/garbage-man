import React, { useState } from "react";
import { wastesData } from "./typesOfWastes";
import WasteComp from "./WasteComp";

const Wastes = () => {
  const [activeTab, setActiveTab] = useState("Industry Waste");
  const [currIdx, setCurrIdx] = useState(0);
  const handleClick = (option, idx) => {
    setActiveTab(option);
    setCurrIdx(idx);
    console.log(idx);
    changeComponent(idx)
  }
  const changeComponent = (idx) => {
    return <WasteComp data={wastesData[idx]} idx = {idx}/>
  }
  return (
    <div className="wastes">
      <h1>Leading Waste Management Market</h1>
      <div className="waste__container">
        <div className="waste_btn_container">
          {wastesData.map((item, idx) => (
            <div className={activeTab === item.title ? 'active btn' : 'btn'} key={idx} onClick={() => handleClick(item.title, idx)}>
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

export default Wastes;
