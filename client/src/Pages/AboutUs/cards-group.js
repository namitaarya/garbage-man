import React from "react";
import "./cards-group.css";
export default function CardsGroup() {
  return (
    <>
      <div style={{margin: '4em auto', width: '90%'}}>
        <div className="containern">
          <h1 style={{ textAlign: "center", fontWeight: '500', fontSize: '2rem', margin: '.5em auto' }}>Work Safely</h1>
          <div className="contentn">
            {/* <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank"> */}
              <div className="contentn-overlay"></div>
              <img className="contentn-image" src="/Asset/card1.jpg" />
              <div className="contentn-details fadeIn-top">
                <h3>Work Safely</h3>
                <p>
                  Recycling is a process that converts the waste material,
                  thought into new and refines form Recycling
                </p>
              </div>
            {/* </a> */}
          </div>
        </div>

        <div className="containern">
          <h1 style={{ textAlign: "center", fontWeight: '500', fontSize: '2rem', margin: '.5em auto' }}>Waste Collection</h1>
          <div className="contentn">
            {/* <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank"> */}
              <div className="contentn-overlay"></div>
              <img className="contentn-image" src="/Asset/card2.jpg" />
              <div className="contentn-details fadeIn-top">
                <h3>Waste Collection</h3>
                <p>
                  We dispose of most industrial items' waste appropriately and
                  neatly. and refines from Recycling
                </p>
              </div>
            {/* </a> */}
          </div>
        </div>

        <div className="containern">
          <h1 style={{ textAlign: "center", fontWeight: '500', fontSize: '2rem', margin: '.5em auto' }}>Waste Assissing</h1>
          <div className="contentn">
            {/* <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank"> */}
              <div className="contentn-overlay"></div>
              <img className="contentn-image" src="/Asset/card3.jpg" />
              <div className="contentn-details fadeIn-top">
                <h3>Waste Assissing</h3>
                <p>
                  Recycling is a process that converts the waste material,
                  thought into new and refines form Recycling
                </p>
              </div>
            {/* </a> */}
          </div>
        </div>
      </div>
    </>
  );
}
