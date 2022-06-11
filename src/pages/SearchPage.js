import React from "react";
import { useNavigate } from "react-router";

const SearchPage = ({ searchedNews, setTargetData }) => {
  const navigate = useNavigate();

  const onNewClickHandler = (e) => {
    setTargetData({
      title: e.target.childNodes[0].childNodes[0].innerText,
      text: e.target.childNodes[0].childNodes[1].innerText,
      img: null,
    });
    setTimeout(navigate(`/newPage`), 0);
  };
  return (
    <div className="news-contener">
      <div className="news__div">
        {searchedNews.map((item) => (
          <div onClick={onNewClickHandler} className="new__div">
            <div className="new__text">
              <h4>{item.headline.main}</h4>
              <p className="new__desc">{item.abstract}</p>
            </div>
            <img src="https://guide.worksmobile.com/en/images/tips-img-19@2x.png" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
