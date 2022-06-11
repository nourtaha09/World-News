import "./styles.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import NewPage from "./pages/NewPage";
import SearchInput from "./components/SearchInput";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";
import AddNews from "./pages/AddNews";
import InsiderNews from "./pages/InsiderNews";
import Register from "./pages/Register";

function App() {
  const [time, setTime] = useState("today");
  const [news, setNews] = useState([]);
  const [targetData, setTargetData] = useState({});
  const [firstRender, setFirstRender] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [searchedNews, setSearchedNews] = useState([]);
  const [addedNews, setAddedNews] = useState([]);
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [pass, setPass] = useState(localStorage.getItem("pass"));
  const [editNewId, setEditNewId] = useState("");
  const [img, setImg] = useState("");
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("loggedIn")) &&
      window.location.pathname === "/Login"
    ) {
      window.location.pathname = "/";
    }
  }, []);
  let url =
    "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=VuPZDkaRmf37FSeSAdcY9tjl2o8GkMwu";
    
  if (time === "today") {
    url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=VuPZDkaRmf37FSeSAdcY9tjl2o8GkMwu`;
  } else if (time === "week") {
    url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=VuPZDkaRmf37FSeSAdcY9tjl2o8GkMwu`;
  } else {
    url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=VuPZDkaRmf37FSeSAdcY9tjl2o8GkMwu`;
  }

  useEffect(() => {
    if (firstRender) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setNews(data.results);
        });
    } else {
      setFirstRender(true);
    }
  }, [time]);

  useEffect(() => {
    if (firstRender && searchWord) {
      const searchUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchWord}&api-key=VuPZDkaRmf37FSeSAdcY9tjl2o8GkMwu`;
      fetch(searchUrl)
        .then((res) => res.json())
        .then((data) => {
          setSearchedNews(data.response.docs);
        });
    } else {
      setFirstRender(true);
    }
  }, [searchWord]);

  return (
    <BrowserRouter>
      <Navbar
        time={time}
        setEmail={setEmail}
        email={email}
        pass={pass}
        setTime={setTime}
      />
      <SearchInput
        setNews={setNews}
        searchWord={searchWord}
        setSearchWord={setSearchWord}
      />
      <Routes>
        <Route
          path="/Login"
          element={<LoginPage setEmail={setEmail} setPass={setPass} />}
        />
        <Route
          path="/"
          element={<Home url={url} news={news} setTargetData={setTargetData} />}
        ></Route>
        <Route
          path="/newPage"
          element={<NewPage targetData={targetData} />}
        ></Route>
        <Route
          path="/searchedNews"
          element={
            <SearchPage
              searchedNews={searchedNews}
              setTargetData={setTargetData}
            />
          }
        />
        <Route
          path="/addNews"
          element={<AddNews img={img} setImg={setImg} />}
        />
        <Route
          path="/insiderNews"
          element={
            <InsiderNews
              setEditNewId={setEditNewId}
              setTargetData={setTargetData}
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/editNew"
          element={
            <AddNews
              img={img}
              setImg={setImg}
              edit={true}
              editNewId={editNewId}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
