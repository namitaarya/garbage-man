import React, { useState } from "react";

const RegisterUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  const [records, setRecords] = useState([]);
  const handleInput = async (event) => {
    const name = await event.target.name;
    const value = await event.target.value;   
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRecord = {...userData}
    setRecords([...records, newRecord]);
    setUserData({name: "", email: "", contact: "", password: ""});
  }

  return <div className="register__form">
    <form action="" onSubmit={handleSubmit}>
        <input type="text" value={userData.name} onChange={handleInput} />
    </form>
  </div>;
};

export default RegisterUser;
