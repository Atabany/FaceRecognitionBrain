import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import Clarifai from 'clarifai'



import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

const particesOptions = {
  particles: {
    number: {
      value: 120,
    },

    density: {
      enable: true,
      value_area: 900,
    },
  },
};



const app = new Clarifai.App({
 apiKey: '67b1eeff66ba4600b6b135868fdef1ac'
});


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
    };
  }

  

  onInputChange = (event) => {
    this.setState({input:event.target.value})
  };

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input})


    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.imageURL).then(
    function(response) {
      let regionInfo = response.outputs[0].data.regions[0].region_info.bounding_box
      console.log(regionInfo)

      

    



    },
    function(err) {
      // there was an error
      console.log(err)

    }
  );






  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageURL={this.state.imageURL}/>
      </div>
    );
  }
}

export default App;
// "67b1eeff66ba4600b6b135868fdef1ac"
// Heads up that the clarifai API has been updated since I made the next video. You will get an error using Clarifai.DETECT_FACE,  it appears to have changed to Clarifai.FACE_DETECT_MODEL (Read more about it here: https://clarifai.com/developer/guide).

// Also, the URL in the next video has also been updated. Keep this in mind as you go through the exercise:

// app.models
// .predict(
// Clarifai.COLOR_MODEL,
//     // URL
//     "https://samples.clarifai.com/metro-north.jpg"
// )
// .then(function(response) {
//     // do something with responseconsole.log(response);
//     },
//     function(err) {// there was an error}
// );
