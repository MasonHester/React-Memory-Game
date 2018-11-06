import React, { Component } from 'react';
import images from "./images.json";
import Image from "./components/Images"

class App extends Component {

  state = {
    signs: images
  }

  render() {
    return (
      <div className="container-fluid">
        {/* <Image key="imagesKey" images={this.state.signs}/> */}
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