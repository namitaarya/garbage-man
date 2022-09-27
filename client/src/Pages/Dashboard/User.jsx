import React, { useState } from "react";
import { PreviousPickup, RequestPickup } from "../../components";

const User = () => {
  const [currTab, setCurrTab] = useState("Request Pickup");
  const changeTab = (option) => {
    switch (option) {
      case "Request Pickup":
        return <RequestPickup />;
      case "Previous Pickup":
        return <PreviousPickup />;
    }
  };
  return (
    <div className="user-dashboard">
      <div className="btn_container">
        <div
          className="btn"
          onClick={() => {
            setCurrTab("Request Pickup");
          }}
        >
          Request Pickup
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
      {changeTab(currTab)}
    </div>
  );
};

export default User;