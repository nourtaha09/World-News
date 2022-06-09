import "./styles.css";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function App() {
  const [time, setTime] = useState("today");
  const timeStamp = new Date().getTime();
  const curr = new Date();
  const yesterdayTimeStamp = timeStamp - 24 * 60 * 60 * 1000;
  let todayDate = new Date(yesterdayTimeStamp);
  let todayFullDate =
    todayDate.getFullYear() +
    "-" +
    (todayDate.getMonth() + 1) +
    "-" +
    todayDate.getDate();

  let firstDayOfTheWeek = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
  let firstDayOfTheWeekDate = new Date(
    curr.setDate(firstDayOfTheWeek)
  ).toUTCString();

  function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1);
  }

  // 👇️ First day of CURRENT MONTH
  const firstDayCurrentMonth = getFirstDayOfMonth(
    curr.getFullYear(),
    curr.getMonth()
  );

  const todayUrl = `https://newsapi.org/v2/everything?q=all&from=${todayFullDate}&apiKey=9fa4d02576e944f9a70f5a045862d57b`;
  const weekUrl = `https://newsapi.org/v2/everything?q=all&from=${firstDayOfTheWeekDate}&apiKey=9fa4d02576e944f9a70f5a045862d57b`;
  const monthUrl = `https://newsapi.org/v2/everything?q=all&from=${firstDayCurrentMonth}&apiKey=9fa4d02576e944f9a70f5a045862d57b`;
  const yearUrl = `https://newsapi.org/v2/everything?q=all&from=${firstDayCurrentMonth}&apiKey=9fa4d02576e944f9a70f5a045862d57b`;

  const [news, setNews] = useState([]);

  useEffect(() => {
    if (time.length > 0) {
      fetch(
        time === "today"
          ? todayUrl
          : time === "week"
          ? weekUrl
          : time === "month"
          ? monthUrl
          : yearUrl
      )
        .then((res) => res.json())
        .then((data) => setNews(data.articles));
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
                  <p className="new__desc">{item.description}</p>
                </div>
                <img src={item.urlToImage} />
              </div>
            ))}
        </div>
      }
    </div>
  );
}

export default App;
