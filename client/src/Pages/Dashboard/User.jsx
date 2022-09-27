import React, { useState } from "react";
import { PreviousPickup, RequestPickup } from "../../components";
import { ScheduledPickup } from "../../components";

const User = ({userId}) => {
  const [currTab, setCurrTab] = useState("Request Pickup");
  const changeTab = (option) => {
    switch (option) {
      case "Request Pickup":
        return <RequestPickup userId={userId} />;
      case "Previous Pickup":
        return <PreviousPickup />;
      case "Scheduled Pickup":
        return <ScheduledPickup />;
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

        <div
          className="btn"
          onClick={() => {
            setCurrTab("Scheduled Pickup");
          }}
        >
          Scheduled Pickups
        </div>
      </div>
      {changeTab(currTab)}
    </div>
  );
};

export default User;
