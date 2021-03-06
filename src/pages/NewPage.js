import React, { useEffect } from "react";

const NewPage = ({ targetData }) => {
  return (
    <div className="newPage__div">
      <h4 style={{ textAlign: "center" }}>{targetData.title}</h4>
      <img
        style={{
          width: "70%",
          maxHeight: "500px",
          display: "block",
          marginTop: "40px",
          marginInline: "auto",
          objectFit: "cover"
        }}
        src={
          targetData?.img
            ? targetData?.img
            : "https://guide.worksmobile.com/en/images/tips-img-19@2x.png"
        }
      />
      <center><p className="new__text">{targetData.text}</p></center>
    </div>
  );
};

export default NewPage;
