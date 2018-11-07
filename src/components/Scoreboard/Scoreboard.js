import React from "react";

const Scoreboard = props => (
    <div className="row">
        <div className="col s4 offset-s1">
            <h1>{props.current}</h1>
        </div>

        <div className="col s4 offset-s2">
            <h1>2</h1>
        </div>
    </div>
);

export default Scoreboard;