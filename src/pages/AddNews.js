import React, { useRef, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddNews = ({ setImg, img, editNewId, edit }) => {
  const navigate = useNavigate();
  const titleRef = useRef();
  const textRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    edit
      ? axios.put(
          `https://62a496bc47e6e400639562ed.mockapi.io/news/news/${editNewId}`,
          {
            img: img,
            text: textRef?.current?.value,
            title: titleRef?.current?.value,
          }
        )
      : axios.post("https://62a496bc47e6e400639562ed.mockapi.io/news/news", {
          img: img,
          text: textRef?.current?.value,
          title: titleRef?.current?.value,
        });
    navigate("/insiderNews");
  };

  return (
    <Form
      style={{
        width: "60%",
        paddingInline: "50px",
        paddingBlock: "80px",
        color: "white",
        background: "#373636",
        marginInline: "auto",
        minWidth: "290px",
        maxWidth: "1200px",
      }}
      onSubmit={submitHandler}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Article Title</Form.Label>
        <Form.Control
          required
          type="text"
          ref={titleRef}
          placeholder="Enter title"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Article Text</Form.Label>
        <br></br>
        <textarea
          required
          ref={textRef}
          style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
          placeholder="Enter text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Add Image</Form.Label>
        <Form.Control
          required
          onChange={(e) => {
            setImg(e.target.value);
          }}
          type="text"
          placeholder="Enter Image Link"
        />
      </Form.Group>
      <img style={{ marginTop: "30px", width: "80%" }} src={img} />
      <Button
        style={{ marginInline: "auto", display: "block", marginTop: "40px" }}
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

export default AddNews;
