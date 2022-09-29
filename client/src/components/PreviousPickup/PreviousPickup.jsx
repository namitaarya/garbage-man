import React, { useEffect, useState } from "react";
import AlignItemsList from "./wastecomponent";
import "./pickup.css";

const PreviousPickup = ({ userId }) => {
  const [pickupData, setPickupData] = useState([])
  useEffect(() => {
    const getPrevPickup = async () => {
      const response = await fetch(
        `http://localhost:1337/prev-pickup/?userId=${userId}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);
      data.prev.map((item) => {
        const url = item.avatar
        item.avatar = url.substring(url.lastIndexOf('/d') + 3, url.lastIndexOf('/view'))
      })
      setPickupData(data.prev)
    };
    getPrevPickup();
  }, []);

  return (
    <div className="prev-pickup">
      <h1>Previous Pickups</h1>
      {
        pickupData && <AlignItemsList data = {pickupData} />
      }
      
    </div>
  );
};

export default PreviousPickup;
