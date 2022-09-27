import React, { useEffect, useState, useRef } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";
import { useNavigate } from "react-router-dom";

const RequestPickup = () => {
  useEffect(() => {
    fetch("http://localhost:1337/isAuthenticated", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) =>
        data.isLoggedIn ? navigate("/dashboard") : navigate("/login-user")
      );
  }, []);

  const [type, setType] = useState("domestic-waste");

  const [pickupData, setPickupData] = useState({
    type: "",
    imageurl: "",
    quantity: "",
    lng: "",
    lat: "",
  });
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const navigate = useNavigate();
  const [map, setMap] = useState({});
  const [records, setRecords] = useState("");

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
        console.log(lnglat, longitude, latitude);
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

  // const handleInputUrl = (event) => {
  //   const str = event.target.value;
  //   // const img_tag = str.substring(str.indexOf("/d/") + 3, str.lastIndexOf("/view"));
  //   // console.log(img_tag)
  //   setPickupData({imageurl: str})
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecord = { ...pickupData };
    setRecords([...records, newRecord]);
    setPickupData({
      type: "",
      quantity: 0,
      lng: "",
      lat: "",
    });
    console.log(pickupData);
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
                  setType(e.target.value);
                  setPickupData({...pickupData, type: type, lng: longitude, lat: latitude})
                  console.log(type);
                }}>
                <option>Domestic Waste</option>
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
