import React, { Component } from "react";
import images from "./images.json";
import Scoreboard from "./components/Scoreboard";
import Image from "./components/Images";

class App extends Component {

  state = {
    signs: images
  }

  render() {
    return (
      <div className="container-fluid">
        <Scoreboard />
        <div className="row">
        {this.state.signs.map(sign => (
          <Image id={sign.id} key={sign.id} src={sign.image} alt={sign.name} />
        ))}
        </div>
      </div>
      
    );
  }
}

export default App;