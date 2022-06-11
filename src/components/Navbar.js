import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router";

const Navbar = ({ time, email, pass, setTime, setEmail }) => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const openOrCloseNav = () => {
    setNavOpen((pre) => !pre);
  };
  return (
    <div className="nav__main_div">
      <h3>World News</h3>
      {navOpen ? (
        <AiFillCloseCircle
          className="nav__icon"
          onClick={openOrCloseNav}
          style={{ fontSize: "30px", zIndex: "50" }}
        />
      ) : (
        <GiHamburgerMenu
          className="nav__icon"
          onClick={openOrCloseNav}
          style={{ fontSize: "30px", position: "relative", zIndex: "50" }}
        />
      )}
      <div className={navOpen ? "nav__div open__nav" : "nav__div"}>
        <a
          onClick={() => {
            setTime("today");
            navigate("/");
            setNavOpen(false);
          }}
        >
          Home
        </a>
        <a
          onClick={() => {
            setTime("week");
            navigate("/");
            setNavOpen(false);
          }}
        >
          This Week{" "}
        </a>
        <a
          onClick={() => {
            setTime("month");
            setNavOpen(false);

            navigate("/");
          }}
        >
          This Month
        </a>

        {email === "admin@gmail.com" && pass === "123" && (
          <>
            <a
              onClick={() => {
                navigate("/addNews");
                setNavOpen(false);
              }}
            >
              AddNews
            </a>
            <a
              onClick={() => {
                navigate("/insiderNews");
                setNavOpen(false);
              }}
            >
              insiderNews
            </a>
          </>
        )}
        {JSON.parse(localStorage.getItem("loggedIn")) ? (
          <a
            onClick={() => {
              navigate("/");
              setEmail("");
              setNavOpen(false);

              localStorage.setItem("loggedIn", false);
              localStorage.setItem("email", "");
              localStorage.setItem("pass", "");
            }}
          >
            Logout
          </a>
        ) : (
          <>
            <a
              onClick={() => {
                navigate("/Login");
                setNavOpen(false);
              }}
            >
              Login
            </a>
            <a
              onClick={() => {
                navigate("/register");
                setNavOpen(false);
              }}
            >
              Register
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
