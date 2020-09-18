import React from 'react';
import FakeData from '../../FakeData/FakeData';
import '../HomePage/HomePage.css'
import Header from '../Navbar/Header';
import Navbar from '../Navbar/Navbar';
import Place from '../Place/Place';
const HomePage = () => {
    const data = FakeData;
    console.log(data);
    return (
        <div className="home-container">
            <Navbar></Navbar>
            <Place></Place>
            
        </div>
    );
};

export default HomePage;