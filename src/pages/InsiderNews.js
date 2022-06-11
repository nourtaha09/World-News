import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const InsiderNews = ({ setTargetData, setEditNewId }) => {
  const [data, setData] = useState([]);
  const deleteHandler = (e) => {
    axios.delete(
      `https://62a496bc47e6e400639562ed.mockapi.io/news/news/${e.target.parentNode.id}`
    );
    axios
      .get("https://62a496bc47e6e400639562ed.mockapi.io/news/news")
      .then((data) => setData(data.data));
  };

  useEffect(() => {
    axios
      .get("https://62a496bc47e6e400639562ed.mockapi.io/news/news")
      .then((data) => setData(data.data));
  }, []);

  const navigate = useNavigate();
  const onNewClickHandler = (e) => {
    setTargetData({
      title: e.target.childNodes[0].childNodes[0].innerText,
      text: e.target.childNodes[0].childNodes[1].innerText,
      img: e.target.childNodes[1].src,
    });
    setTimeout(navigate(`/newPage`), 0);
  };

  const editHandler = (e) => {
    setEditNewId(e.target.parentNode.id);
    navigate("/editNew");
  };

  return (
    <div className="news-contener">
      <div className="news__div">
        {data.map((item) => (
          <div id={item.id} key={item.id} style={{ position: "relative" }}>
            <div onClick={onNewClickHandler} className="newInsider__div">
              <div className="new__text">
                <h4>{item.title}</h4>
                <p className="new__desc">{item.text}</p>
              </div>
              <img
                className="newImg"
                src={
                  item.img
                    ? item.img
                    : "https://icon-library.com/images/unknown-person-icon/unknown-person-icon-4.jpg"
                }
              />
            </div>{" "}
            <MdDelete
              onClick={deleteHandler}
              style={{
                position: "absolute",
                right: "10px",
                bottom: "10px",
                fontSize: "40px",
                color: "white",
              }}
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/delete-1432400-1211078.png"
            />
            <FaEdit
              onClick={editHandler}
              style={{
                position: "absolute",
                right: "60px",
                bottom: "10px",
                fontSize: "40px",
                color: "white",
              }}
              src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-edit-icon-png-image_695730.jpg"
            />
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default InsiderNews;
