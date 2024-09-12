import React from "react";
import reactLogo from "../images/react-logo.svg";

const Main = () => {
  return (
    <main>
      <img src={reactLogo} alt="" className="main-bg-logo" />
      <h1 className="main-title">Fun facts about React</h1>
      <ul className="main-list">
        <li>Was first released in 2012</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
};

export default Main;
