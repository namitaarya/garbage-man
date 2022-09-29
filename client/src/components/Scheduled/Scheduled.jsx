import React, { useEffect, useRef, useState } from "react";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";
import * as ttapi from "@tomtom-international/web-sdk-services";
import "./style.css";

const Scheduled = () => {
  const mapElement = useRef();
  const [longitude, setLongitude] = useState(77.1370002);
  const [latitude, setLatitude] = useState(28.7188327);
  const [map, setMap] = useState({});
  const [pickupData, setPickupData] = useState([]);

  const convertToPoints = (lngLat) => {
    return {
      point: {
        latitude: lngLat.lat,
        longitude: lngLat.lng,
      },
    };
  };

  const setGeoLocation = () => {
    if (navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
      });
    }
  };
  setGeoLocation();

  const drawRoutes = (geoJson, map) => {
    if (map.getLayer("route")) {
      map.removeLayer("route");
      map.removeSource("route");
    }
    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: geoJson,
      },
      paint: {
        "line-color": "#4a90e2",
        "line-width": 6,
      },
    });
  };

  const addPickupMarker = (lngLat, map) => {
    const element = document.createElement("div");
    element.className = "marker-delivery";

    new tt.Marker({
      element: element,
    })
      .setLngLat(lngLat)
      .addTo(map);
  };

  useEffect(() => {
    const origin = {
      lng: longitude,
      lat: latitude,
    };
    const destinations = [];

    // console.log(longitude, latitude);
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

    const sortDestinations = (locations) => {
      const pointsForDestinations = locations.map((destination) => {
        return convertToPoints(destination);
      });
      const callParameters = {
        key: process.env.REACT_APP_TOMTOM_API_KEY,
        destinations: pointsForDestinations,
        origins: [convertToPoints(origin)],
      };

      return new Promise((resolve, reject) => {
        ttapi.services
          .matrixRouting(callParameters)
          .then((matrixAPIResults) => {
            const results = matrixAPIResults.matrix[0];
            const resultsArray = results.map((result, index) => {
              return {
                location: locations[index],
                drivingtime: result.response.routeSummary.travelTimeInSeconds,
              };
            });
            resultsArray.sort((a, b) => {
              return a.drivingtime - b.drivingtime;
            });
            const sortedLocations = resultsArray.map((result) => {
              return result.location;
            });
            resolve(sortedLocations);
          });
      });
    };

    const recalculateRoutes = () => {
      sortDestinations(destinations).then((sorted) => {
        sorted.unshift(origin);

        ttapi.services
          .calculateRoute({
            key: process.env.REACT_APP_TOMTOM_API_KEY,
            locations: sorted,
          })
          .then((routeData) => {
            const geoJson = routeData.toGeoJson();
            drawRoutes(geoJson, map);
          });
      });
    };

    const getDestinations = async () => {
      const response = await fetch("http://localhost:1337/get-destinations");
      const data = await response.json();
      if (data.status === "ok") {
        setPickupData(data.userData);
        console.log("pickup data-> ", pickupData);
        data.data.map((item, i) => {
          const obj = {
            lng: item.longitude,
            lat: item.latitude,
          };
          destinations.push(obj);
        });
        destinations.forEach((lnglat) => {
          addPickupMarker(lnglat, map);
          recalculateRoutes();
        });
      }
    };
    getDestinations();

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

          {pickupData && (
            <table>
              <thead>
                <tr>
                  <th>Pickup No.</th>
                  <th>Citizen Name</th>
                  <th>Garbage Quantity</th>
                  <th>Garbage Category</th>
                </tr>
              </thead>
              <tbody>
                {
                  pickupData.map((item, i) => (
                    <tr>
                      <td>{i + 1}.</td>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.type}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          )}
        </div>

        <div className="right">
          {map && <div className="map" ref={mapElement}></div>}
        </div>
      </div>
    </div>
  );
};

export default Scheduled;
