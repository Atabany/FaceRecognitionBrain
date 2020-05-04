import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageURL }) => {
  return (
    <div className="center">
      <div className="absolute mt2 ">
        <img alt="" src={imageURL} width="500px" height="auto"></img>
      </div>
    </div>
  );
};

export default FaceRecognition;
