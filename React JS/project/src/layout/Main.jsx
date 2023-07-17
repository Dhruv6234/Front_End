import React from 'react';
import Navbar from './Navbar'
import Explore from './Explore'
import Popular from './Popular'
import Flights from './BookFlights'
import Footer from './Footer'

function Main(props) {
    return (
        <>
        <Navbar/>
        <Explore/>
        <Popular/>
        <Flights/>
        <Footer/>
       
        </>
    );
}

export default Main;