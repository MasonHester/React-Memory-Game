import React from "react";

const Images = props => (
    <div className="col s6 l3">
        <img id={props.id} src={props.src} alt={props.name} onClick={() => props.handleClick(props.id)} className="responsive-img center"></img>
    </div>
);

export default Images;