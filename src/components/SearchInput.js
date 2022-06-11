import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";

const SearchInput = ({ setSearchWord, setNews }) => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    setSearchWord(inputRef.current.value);
    navigate("/searchedNews");
  };
  const inputRef = useRef();
  return (
    <div>
      <form
        style={{
          marginBlock: "40px",
          display: "flex",
          alignItems: "flex-end",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
        }}
        onSubmit={submitHandler}
      >
        <input
          ref={inputRef}
          style={{
            display: "block",
            paddingInline: "10px",
          }}
        ></input>
        <select
          style={{ height: "26px" }}
          onChange={(e) => {
            setSearchWord(e.target.value);
            navigate("/searchedNews");
          }}
        >
          <option>real estate</option>
          <option>food</option>
          <option>arts</option>
          <option>sports</option>
          <option>magazine</option>
          <option>travel</option>
        </select>
      </form>
    </div>
  );
};

export default SearchInput;
