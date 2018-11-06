import React from 'react';

const Images = props => (
    <div className='col s6 l3'>
        <img src={props.src} alt={props.name} className="responsive-img center"></img>
    </div>
);

export default Images;