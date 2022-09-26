import React from "react";
import "./aboutcomp.css";

const MainCompAbout = (props) => {
  return (
    <div
      className="waste_card"
      style={
        props.idx % 2 !== 0
          ? { flexDirection: "row-reverse" }
          : { flexDirection: "row" }
      }
    >
      <img src={props.data.url} alt="" />
      <div className="content_container">
        <h3>{props.data.heading}</h3>
        <p>{props.data.para}</p>
        <ol>
          {props.data.contentList.map((item) => (
            <li>
              <h4>{item.head}</h4>
              <p>{item.content}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default MainCompAbout;
