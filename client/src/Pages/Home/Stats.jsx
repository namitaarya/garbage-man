import React, { useEffect, useRef, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const Stats = () => {
  const progressData = [
    {
      title: "Sample Preparation",
      progress: 60,
    },
    {
      title: "Medical Private",
      progress: 85,
    },
    {
      title: "Advanced Microscopy",
      progress: 70,
    },
  ];
  return (
    <div className="stats">
      <div className="left">
        <img src="/Asset/stats-bg-1.jpg" alt="STATS" />
      </div>
      <div className="right">
        <div className="right_subcontainer">
          <h1>Leading Waste Management</h1>
          <p>
            Do you know what materials are recycling? In 2020, almost all
            materials are recyclable! Plastic, glass, alumni, cardboard.
          </p>
          <ul>
            <li>
              <BsCheckCircleFill className="icon" /> Reduce reuse recycle waste
              materials
            </li>
            <li>
              <BsCheckCircleFill className="icon" /> Make 3 R's Promise Reuse it
              or Lose it.
            </li>
            <li>
              <BsCheckCircleFill className="icon" /> Think outside the
              trash…Reduce, Reuse, Recycle!
            </li>
            <li>
              <BsCheckCircleFill className="icon" /> Waste it once…pay for it
              twice!. Be Responsible!
            </li>
          </ul>
          <div className="progress_container">
            {progressData.map((item, idx) => (
              <div className="progress_group" key={idx}>
                <h6>
                  <span>{item.title}</span> <span>{item.progress}%</span>
                </h6>
                <div className="progress_bar">
                  <div className="bar" style={{ width: `${item.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
