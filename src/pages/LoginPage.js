import React, { useRef, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LoginPage = ({ setEmail, setPass }) => {
  const navigate = useNavigate();
  const ref = useRef();
  const passRef = useRef();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://62a4b82747e6e400639756c3.mockapi.io/users")
      .then((data) => setUsers(data.data));
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    setEmail(ref.current.value);
    setPass(passRef.current.value);
    axios
      .get("https://62a4b82747e6e400639756c3.mockapi.io/users")
      .then((data) => setUsers(data.data));
    if (
      users.some((item) => item.email === ref?.current?.value) &&
      users.some((item) => item.pass === passRef?.current?.value)
    ) {
      navigate("/");
      localStorage.setItem("loggedIn", JSON.stringify(true));
      localStorage.setItem("email", ref.current.value);
      localStorage.setItem("pass", passRef.current.value);
      document.querySelector("#email_label").style.color = "white";
      document.querySelector("#email_pass").style.color = "white";
      document.querySelector("#login_warning").innerText = "";
    } else {
      document.querySelector("#email_lable").style.color = "red";
      document.querySelector("#email_pass").style.color = "red";
      document.querySelector("#login_warning").innerText =
        "email or password or both are wrong if you dont have account please register in the website";
    }
  };
  return (
    <Form
      style={{
        width: "80%",
        paddingInline: "50px",
        paddingBlock: "80px",
        color: "white",
        background: "#373636",
        marginInline: "auto",
        maxWidth: "1200px",
        minWidth: "290px",
      }}
      onSubmit={submitHandler}
    >
      <h2>Login</h2>
      <Form.Group className="mb-3">
        <p style={{ color: "red" }} id="login_warning"></p>
        <Form.Label id="email_lable">Email address</Form.Label>
        <Form.Control ref={ref} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label id="email_pass">Password</Form.Label>
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

export default LoginPage;
