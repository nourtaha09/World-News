import "./styles.css";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function App() {
  const [time, setTime] = useState("today");


  function getNewsImage(item){

    try{
      if(item.media){
        if(item.media[0]){
          const metaData = item.media[0]["media-metadata"]
          if(metaData){
            return metaData[metaData.length - 1].url
          }
        }
      }
    }catch(e){
      return ''
    }
  }

  const todayUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=VuPZDkaRmf37FSeSAdcY9tjl2o8GkMwu`;
  const weekUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=VuPZDkaRmf37FSeSAdcY9tjl2o8GkMwu`;
  const monthUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=VuPZDkaRmf37FSeSAdcY9tjl2o8GkMwu`;

  const [news, setNews] = useState([]);

  
  useEffect(() => {
    if (time.length > 0) {
      fetch(
        time === "today"
          ? todayUrl
          : time === "week"
          ? weekUrl
          : monthUrl
      )
        .then((res) => res.json())
        .then((data) => setNews(data.results));
    }
  }, [time]);

  return (
    <div className="news-contener">
      <Navbar time={time} setTime={setTime} />
      {
        <div className="news__div">
          {news &&
            news.map((item) => (
              <div className="new__div">
                <div className="new__text">
                  <h4>{item.title}</h4>
                  <p className="new__desc">{item.abstract}</p>
                </div>
                <img src={getNewsImage(item)} />
              </div>
            ))}
        </div>
      }
    </div>
  );
}

export default App;

