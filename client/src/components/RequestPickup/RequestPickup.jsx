import React, { useEffect, useState, useRef } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";
import { useNavigate } from "react-router-dom";

const RequestPickup = ({userId}) => {
  const [type, setType] = useState("domestic-waste");
  const [pickupData, setPickupData] = useState({
    imageurl: "",
    quantity: "",
    type: "",
    dateTime: "",
    lng: "",
    lat: "",
    id: userId
  });
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const navigate = useNavigate();
  const [map, setMap] = useState({});
  const [dateTime, setDateTime] = useState("");
  const [id, setId] = useState('')

  const mapElement = useRef();

  useEffect(() => {
    if (navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
      });
    }

    let map = tt.map({
      key: process.env.REACT_APP_TOMTOM_API_KEY,
      container: mapElement.current,
      stylesVisibility: {
        trafficFlow: true,
        trafficIncidents: true,
      },
      center: [longitude, latitude],
      zoom: 14,
    });

    setMap(map);
    const addMarker = () => {
      const popupOffset = {
        bottom: [0, -25],
      };
      const popup = new tt.Popup({ offset: popupOffset }).setHTML(
        "This is you!"
      );
      const element = document.createElement("div");
      element.className = "marker";
      const marker = new tt.Marker({
        draggable: true,
        element: element,
      })
        .setLngLat([longitude, latitude])
        .addTo(map);

      marker.on("dragend", () => {
        const lnglat = marker.getLngLat();
        setLongitude(lnglat.lng);
        setLatitude(lnglat.lat);
      });

      marker.setPopup(popup).togglePopup();
    };

    addMarker();

    return () => map.remove();
  }, [longitude, latitude]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPickupData({ ...pickupData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(pickupData);

    setPickupData({
      quantity: 0,
      lng: "",
      dateTime: "",
      imageurl: "",
      type: "",
      lat: "",
      id: userId
    });

    const response = await fetch("/api/request-pickup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(pickupData),
    });

    const data = await response.json();

    if (data.status === "ok") {
      alert('Pickup scheduled')
      navigate("/dashboard");
    }
  };
  return (
    <div className="register__form">
      <div className="form__wrapper">
        <div className="left">
          <h1>Request Pickup</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            reprehenderit ea ad dolores fugiat tempora?
          </p>
          <form action="" className="register__form" onSubmit={handleSubmit}>
            <div className="form_group">
              <select
                name="type"
                id=""
                value={type}
                onChange={(e) => {
                  setPickupData({
                    ...pickupData,
                    lat: latitude,
                    lng: longitude,
                    type: e.target.value,

                  });
                }}
              >
                <option value="domestic-waste">Domestic Waste</option>
                <option value="industry-waste">Industry Waste</option>
                <option value="food-waste">Food Waste</option>
                <option value="chemical-waste">Chemical Waste</option>
                <option value="metal-waste">Metal Waste</option>
                <option value="medical-waste">Medical Waste</option>
              </select>
            </div>

            <div className="form_group">
              <input
                name="imageurl"
                type="text"
                value={pickupData.imageurl}
                onChange={handleInput}
                placeholder="Enter image drive link"
              />
            </div>
            <div className="form_group">
              <input
                type="number"
                name="quantity"
                value={pickupData.quantity}
                onChange={handleInput}
                placeholder="Enter Quantity of Waste"
                id=""
              />
            </div>

            <div className="form_group">
              <input
                type="datetime-local"
                value={pickupData.dateTime.toString().substring(0, 16)}
                onChange={(e) => {
                  if (!e.target["validity"].valid) return;
                  const dt = e.target["value"];
                  setPickupData({ ...pickupData, dateTime: dt });
                  console.log(dt);
                }}
                id=""
              />
            </div>

            <button className="submit_btn">Request Pickup</button>
          </form>
        </div>

        <div className="right">
          <div className="map" ref={mapElement}></div>
        </div>
      </div>
    </div>
  );
};

export default RequestPickup;
