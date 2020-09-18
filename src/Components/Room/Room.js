import React from 'react';
import './Room.css'
import icon from '../../Image/Icon/star_1_.png'
const Room = (props) => {
    const {
      title,
      guests,
      bedrooms,
      beds,
      baths,
      cancellation,
      cost,
      facility,
      ratings,
      img
    } = props.room;
    return (
      <div className="room">
        <div className="room-pic">
          <img src={img} alt=""/>
        </div>
        <div className="room-details">
          <h2> {title} </h2>
          <p> {guests} guests    <span>  </span>{bedrooms} bedrooms  {beds} beds   {baths} baths </p>
          <p> {facility} </p>
          <p> {cancellation} </p>
          <p> <img src= {icon} alt=""/>  {ratings}   <span style = {{fontSize: "20px", marginLeft: "30px", color: "Black"}}>{cost} </span> </p>

        </div>
      </div>
    );
};

export default Room;