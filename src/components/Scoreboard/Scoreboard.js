import React from "react";
import "./style.css"

const Scoreboard = props => (
    <div class="scoreBoard">
        <div className="row">
            <div className="col s4 offset-s1 currentScore">
                <h1>Current Score</h1>
            </div>

            <div className="col s4 offset-s2 highScore">
                <h1>High Score</h1>
            </div>
        </div>
        <div className="row">
            <div className="col s4 offset-s1 currentScore">
                <h2>{props.current}</h2>
            </div>

            <div className="col s4 offset-s2 highScore">
                <h2>{props.best}</h2>
            </div>
        </div>
    </div>
);

export default Scoreboard;