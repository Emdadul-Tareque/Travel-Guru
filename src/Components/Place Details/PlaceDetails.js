import React from 'react';
import './PlaceDetails.css'
const PlaceDetails = (props) => {
    const {name, details } = props.placeDetails;
    return (
      <div className="details">
        <h1 className = "place-name">{name}</h1>
        <p> {details} </p>
      </div>
    );
};

export default PlaceDetails;