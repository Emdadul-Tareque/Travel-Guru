import React from 'react';
import sundorbon from '../../Image/sundorbon.png'
import sajek from '../../Image/Sajek.png'
import sremongal from '../../Image/Sreemongol.png'
import './Place.css'
import { Link } from 'react-router-dom';
const Place = () => {
    return (
      <div className="place-image">
        <Link to = {"/book/1"}> {<img className="image" src={sundorbon} alt="" />} </Link>
        <Link to = "/book/2"> {<img className="image" src={sajek} alt="" />} </Link>
        <Link to = "/book/3"> {<img className="image" src={sremongal} alt="" />} </Link>
      </div>
    );
};

export default Place;