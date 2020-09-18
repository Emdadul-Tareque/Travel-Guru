import React from 'react';
import { Link, useParams } from 'react-router-dom';
import FakeData from '../../FakeData/FakeData';
import DateTimeFrom from '../DateTime/DateTimeFrom';
import DateTime from '../DateTime/DateTimeFrom';
import DateTimeTo from '../DateTime/DateTimeTo';

import Navbar from '../Navbar/Navbar';
import PlaceDetails from '../Place Details/PlaceDetails';
import './Book.css'


const Book = () => {
    const { placeId } = useParams();
    const placeDetails = FakeData.find((pd) => pd.id === placeId);
    console.log(placeDetails);

  
    return (
      <div className="booking">
        <Navbar></Navbar>
        <div className="booking-information">
          <div className="place-details">
            <PlaceDetails placeDetails={placeDetails}></PlaceDetails>
          </div>
          <div className="booking-form">
            <form action="">
               <div className="form-Field">
                <label for="fname">Origin</label>
                <br></br>
                <input className="input" type="text" placeholder="Dhaka" required/>
                <br />
              </div>
              <div className="form-Field">
                <label for="fname">Destination</label>
                <br />
                <input className="input" type="text" placeholder = {placeDetails.name} required/>
              </div>
              <div>
                <div className="data-time">
                  <div>
                    <DateTimeFrom></DateTimeFrom>
                  </div>
                  <div>
                    <DateTimeTo></DateTimeTo>
                  </div>
                </div>
                <div>
                  <Link to={"/hotel/"+placeId}>
                    <button className="booking-btn"> Start Booking</button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Book;