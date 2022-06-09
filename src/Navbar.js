import React, { useState } from "react";

const Navbar = ({ time, setTime }) => {
  return (
    <div className="nav__main_div">
      <h3>World News</h3>
      <div className="nav__div">
        <a
          onClick={() => {
            setTime("today");
          }}
        >
          Home
        </a>
        <a
          onClick={() => {
            setTime("week");
          }}
        >
          Last 7 Days{" "}
        </a>
        <a
          onClick={() => {
            setTime("month");
          }}
        >
          Last 30 Days
        </a>

      </div>
    </div>
  );
};

export default Navbar;
