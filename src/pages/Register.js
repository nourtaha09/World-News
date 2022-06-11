import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
const Register = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log(users);
  }, [users]);
  useEffect(() => {
    axios
      .get("https://62a496bc47e6e400639562ed.mockapi.io/news/users")
      .then((data) => setUsers(data.data));
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get("https://62a496bc47e6e400639562ed.mockapi.io/news/users")
      .then((data) => setUsers(data.data));
    if (users.some((item) => item.email === ref?.current?.value)) {
      document.querySelector("#email_lable").style.color = "red";
      document.querySelector("#form_text").innerText =
        "this gmail aready exsist";
    } else {
      document.querySelector("#email_lable").style.color = "white";
      document.querySelector("#form_text").innerText = "";
      axios.post("https://62a496bc47e6e400639562ed.mockapi.io/news/users", {
        email: ref.current.value,
        pass: passRef.current.value,
      });
    }
  };

  const navigate = useNavigate();
  const ref = useRef();
  const passRef = useRef();
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
      <h2>Register</h2>
      <Form.Group className="mb-3">
        <Form.Label id="email_lable">Email address</Form.Label>
        <Form.Control ref={ref} type="email" placeholder="Enter email" />
        <Form.Text style={{ color: "red" }} id="form_text"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          ref={passRef}
          type="password"
          placeholder="Enter password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Register;
