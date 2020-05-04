import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";

const particesOptions = {
  particles: {
    number: {
      value: 300,
    },

    density: {
      enable: true,
      value_area: 800,
    },
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />

        {/* // 
        // 
        // <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
