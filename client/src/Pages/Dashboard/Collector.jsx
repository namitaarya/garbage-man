import React, { useState } from "react";
import { PreviousPickup, Scheduled } from "../../components";

const Collector = () => {
  const [currTab, setCurrTab] = useState("Scheduled Pickup");

  const changeTab = () => {
    if (currTab === "Scheduled Pickup") return <Scheduled />;
    if (currTab === "Previous Pickup") return <PreviousPickup />;
  };
  return (
    <div className="collector">
      <div className="btn_container">
        <div
          className="btn"
          onClick={() => {
            setCurrTab("Scheduled Pickup");
          }}
        >
          Scheduled Pickup
        </div>
        <div
          className="btn"
          onClick={() => {
            setCurrTab("Previous Pickup");
          }}
        >
          Previous Pickups
        </div>
      </div>

      {changeTab()}
    </div>
  );
};

export default Collector;
