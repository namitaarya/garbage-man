import React, { useEffect, useRef, useState } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";
import * as ttapi from "@tomtom-international/web-sdk-services";

const Scheduled = () => {
  const mapElement = useRef();
  const [longitude, setLongitude] = useState(77.1370002);
  const [latitude, setLatitude] = useState(28.7188327);
  const [map, setMap] = useState({});
  let destinations = [];

  const setGeoLocation = () => {
    if (navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
      });
    }
  };

  setGeoLocation();

  const getDestinations = async () => {
    const response = await fetch("http://localhost:1337/get-destinations");
    const data = await response.json();
    if (data.status === "ok") {
      // console.log(data.data);
      data.data.map((item, i) => {
        const obj = {
          lng: item.longitude,
          lat: item.latitude,
        };
        destinations.push(obj);
        // console.log('obj', i, ': ',obj);
      });
    }

    // console.log(destinations);
  };

  getDestinations();

  const convertToPoints = (lngLat) => {
    return {
      point: {
        latitude: lngLat.lat,
        longitude: lngLat.lng,
      },
    };
  };

  const addPickupMarker = (lngLat, map) => {
    const element = document.createElement('div')
    element.className = 'marker-delivery'

    new tt.Marker({
        element: element
    })
    .setPopup(lngLat)
    .addTo(map)
  }
  useEffect(() => {
    const origin = {
      lng: longitude,
      lat: latitude,
    };
    console.log(longitude, latitude);
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

    // const destinationPoints =
    // const callParameters = {
    //     key: process.env.REACT_APP_TOMTOM_API_KEY,
    //     destination: destinationPoints,
    //     origin: [convertToPoints(origin)]
    // }

    // return new Promise((resolve, reject) => {
    //     ttapi.services
    //     .matrixRouting(callParameters)
    // })

    if(destinations.length) {
        destinations.forEach((item) => console.log(item))
    }

    return () => map.remove();
  }, [longitude, latitude]);
  return (
    <div className="scheduled register__form">
      <div className="form__wrapper">
        <div className="left">
          <h1>Scheduled Pickup</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            reprehenderit ea ad dolores fugiat tempora?
          </p>
        </div>

        <div className="right">
          <div className="map" ref={mapElement}></div>
        </div>
      </div>
    </div>
  );
};

export default Scheduled;
