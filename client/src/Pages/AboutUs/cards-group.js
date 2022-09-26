import React from "react";
import "./cards-group.css";
export default function CardsGroup() {
  return (
    <>
      <div class="containern">
      <h1 style={{textAlign: "center"}}>Work Safely</h1>
        <div class="contentn">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="contentn-overlay"></div>
            <img
              class="contentn-image"
              src ="/Asset/card1.jpg"
            />
            <div class="contentn-details fadeIn-top">
              <h3>Work Safely</h3>
              <p>Recycling is a process that converts the waste material, thought into new and refines form Recycling</p>
            </div>
          </a>
        </div>
      </div>

      <div class="containern">
      <h1 style={{textAlign: "center"}}>Waste Collection</h1>
        <div class="contentn">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="contentn-overlay" ></div>
            <img
              class="contentn-image"
              src ="/Asset/card2.jpg"
            />
            <div class="contentn-details fadeIn-top">
              <h3>Waste Collection</h3>
              <p>We dispose of most industrial items' waste appropriately and neatly. and refines from Recycling</p>
            </div>
          </a>
        </div>
      </div>

      <div class="containern">
      <h1 style={{textAlign: "center"}}>Waste Assissing</h1>
        <div class="contentn">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="contentn-overlay"></div>
            <img
              class="contentn-image"
              src ="/Asset/card3.jpg"
            />
            <div class="contentn-details fadeIn-top">
              <h3>Waste Assissing</h3>
              <p>Recycling is a process that converts the waste material, thought into new and refines form Recycling</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
