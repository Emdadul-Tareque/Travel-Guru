import React from 'react';
import { useParams } from 'react-router-dom';
import FakeData from '../../FakeData/FakeData';
import Header from '../Navbar/Header';
import Navbar from '../Navbar/Navbar';
import Room from '../Room/Room';
import './Hotel.css'
const Hotel = () => {
    const { placeId } = useParams();
    const placeDetails = FakeData.find((pd) => pd.id === placeId);
    const hotels = placeDetails.hotels;
    
    return (
      <div className = "hotel">
        <Navbar></Navbar>
        <h1>Stay in {placeDetails.name} </h1>
        {hotels.map((room) => (
          <Room room={room}></Room>
        ))}
      </div>
    );
};

export default Hotel;