import React, { Component } from "react";
import images from "./images.json";
import Scoreboard from "./components/Scoreboard";
import Image from "./components/Images";
import "./index.css"

class App extends Component {

  state = {
    signs: images,
    clickedImages: [],
    currentScore: 0,
    bestScore: 0
  }

  shuffleImages = () => {
    // Old Shuffle
    //=================================================================

    // let shuffledArray = this.state.signs;
    // let counter = this.state.signs.length;
    

    // while (counter > 0) {
    //     const randomIndex = Math.floor(Math.random() * counter);

    //     counter = counter - 1;

    //     let dataForSwap = shuffledArray[counter];
    //     shuffledArray[counter] = shuffledArray[randomIndex];
    //     shuffledArray[randomIndex] = dataForSwap;
    // };

    // return shuffledArray

    //=================================================================

    // New shuffle (Provided by Joshua Lebeouf https://github.com/HumanJBooF)

    const shuffledArray = this.state.signs.map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);
    return shuffledArray;
  };

  handleScoreChange = (userGuess, id) => {
    if (userGuess === true) {
      const score = this.state.currentScore + 1
      this.setState({
        signs: this.shuffleImages(),
        clickedImages: [...this.state.clickedImages, id],
        currentScore: score,
        bestScore: score > this.state.bestScore ? score : this.state.bestScore 
      })
    } else {
      this.setState({
        signs: this.shuffleImages(),
        clickedImages: [],
        currentScore: 0
      })
    }

    if (this.state.clickedImages.length >= this.state.signs.length) {
      console.log("win")
    }
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
        <Scoreboard current={this.state.currentScore} best={this.state.bestScore} />
        <div className="row">
          {this.state.signs.map(sign => (
            <Image id={sign.id} key={sign.id} src={sign.image} alt={sign.name} handleClick={this.handleClick} />
          ))}
        </div>
      </div>
      
    );
  }
}

export default App;