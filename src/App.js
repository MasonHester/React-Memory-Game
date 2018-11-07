import React, { Component } from "react";
import images from "./images.json";
import Scoreboard from "./components/Scoreboard";
import Image from "./components/Images";

class App extends Component {

  state = {
    signs: images,
    clickedImages: [],
    currentScore: 0
  }

  handleScoreChange = (userGuess, id) => {
    if (userGuess === true) {
      const score = this.state.currentScore + 1
      this.setState({
        signs: images,
        clickedImages: [...this.state.clickedImages, id],
        currentScore: score
      })
    } else {
      this.setState({
        signs: images,
        clickedImages: [],
        currentScore: 0
      })
    }
    if (this.state.clickedImages.length >= this.state.signs.length) {
      console.log("win")
    }
  }

  checkIfClicked = (id) => {
    return this.state.clickedImages.includes(id);
  }

  handleClick = (id) => {
    console.log(this.state.clickedImages)
    switch (this.state.clickedImages.indexOf(id)) {
      case (-1):
        this.handleScoreChange(true, id);
        break;
      default:
        this.handleScoreChange(false);
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <Scoreboard current={this.state.currentScore} />
        <div className="row">
          {this.state.signs.map(sign => (
            <Image id={sign.id} key={sign.id} src={sign.image} alt={sign.name} handleClick={this.handleClick}/>
          ))}
        </div>
      </div>
      
    );
  }
}

export default App;