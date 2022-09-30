import React, { useEffect, useState } from "react";
import AlignItemsList from "../PreviousPickup/wastecomponent";
import "../PreviousPickup/pickup.css";

const ScheduledPickUp = ({ userId }) => {
  const [pickupData, setPickupData] = useState([]);
  useEffect(() => {
    const getPrevPickup = async () => {
      const response = await fetch(
        `/api/prev-pickup/${userId}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);
      data.prev.map((item) => {
        const url = item.avatar;
        item.avatar = url.substring(
          url.lastIndexOf("/d") + 3,
          url.lastIndexOf("/view")
        );
      });
      setPickupData(data.prev);
    };
    getPrevPickup();
  }, []);
  return (
    <div className="prev-pickup">
      <h1>Scheduled Pick Ups</h1>
      {pickupData && <AlignItemsList data={pickupData} />}
    </div>
  );
};

export default ScheduledPickUp;
