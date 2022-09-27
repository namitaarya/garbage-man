import React from "react";
import ColumnGroupingTable from "./SchedulePickUp";
// import './SchedulePickUp.css'

const ScheduledPickUp = () => {
  return (
    <div>
      <h1 style={{
        textAlign: "center",
        padding: "2%"
      }}>Scheduled PickUp</h1>

      <div style={{
        width: "80%",
        marginLeft: "9%",
        padding: "2%"
      }}>
      <ColumnGroupingTable />
      </div>
      
    </div>

  );
};

export default ScheduledPickUp;