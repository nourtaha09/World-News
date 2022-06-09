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
          This Week{" "}
        </a>
        <a
          onClick={() => {
            setTime("month");
          }}
        >
          This Month
        </a>
        <a
          onClick={() => {
            setTime("year");
          }}
        >
          {" "}
          this Year
        </a>
      </div>
    </div>
  );
};

export default Navbar;
