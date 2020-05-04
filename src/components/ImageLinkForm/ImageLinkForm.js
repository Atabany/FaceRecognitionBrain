import React from "react";
import './ImageLinkForm.css'
const ImageLinkForm = (props) => {
  return (
    <div className="ma4 mt0">
      <p className="f4">
        {" "}
        {
          "This magic brain will detect faces in your picture. Get it an image"
        }{" "}
      </p>
      <div className="center">
        <div className="form pa4 br3 shadow-5 center">
          <input className="f4 pa2 w-70 center" type="text"></input>
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
