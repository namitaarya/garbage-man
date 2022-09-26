import React from "react";
import CardsGroup from "./cards-group";
import Mission from "./missionandvision";

export default function AboutUs(){
return(
<div>
    <div className="image-bg" style= {{             
              background: `linear-gradient(0deg, rgba(0, 0, 0, .55), rgba(0, 0, 0, .55)), url('/Asset/aboutusbg.jpg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "50vh",
              width: "100%",
              backgroundPosition: ""}}>
              <h1 style={{textAlign: 'center', fontSize: '80px'}}>About Us</h1>
              <p style={{textAlign: 'center',  fontSize: '55px'}}>What we do?</p>
    
</div>
<CardsGroup />
<Mission />
</div>
);}