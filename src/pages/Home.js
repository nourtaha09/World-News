import React from "react";
import { useNavigate } from "react-router";
const Home = ({ url, news, setTargetData, searchedNews }) => {
  const navigate = useNavigate();
  const onNewClickHandler = (e) => {
    setTargetData({
      title: e.target.childNodes[0].childNodes[0].innerText,
      text: e.target.childNodes[0].childNodes[1].innerText,
      img: e.target.childNodes[1].src,
    });
    setTimeout(navigate(`/newPage`), 0);
  };
  return (
    <div className="news-contener">
      <div className="news__div">
        {news.map((item) => (
          <div onClick={onNewClickHandler} className="new__div">
            <div className="new__text">
              <h4>{item.title}</h4>
              <p className="new__desc">{item.abstract}</p>
            </div>
            <img
              src={
                item?.media[0]?.["media-metadata"][2]?.url
                  ? item?.media[0]?.["media-metadata"][2]?.url
                  : "https://icon-library.com/images/unknown-person-icon/unknown-person-icon-4.jpg"
              }
            />
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default Home;
