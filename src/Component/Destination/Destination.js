
import React, { useEffect, useState } from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import './Destination.css';


const Destination = (props) => {
    const { image, name, priceOne, priceTwo, priceThree, id } = props.data;
    const handleSearch = () => {
        console.log("search result!");
    }
    const [rideInfo, setRideInfo]=useState(false);
    return (
        <div>
        <div className="destination-detail">
            <div className="container">
                <div className="row">
            
            <div className="single-destination">

            <div className="location-info">
      <div className="col-md-4">
          <span>Pickup from</span>
         <h4 className="location">Mirpur 1</h4>
         <span>pick to</span>
         <h4 className="location">Dhanmondi</h4>
      </div>
      </div>
                
            {!rideInfo ?
              <button class="ride-search" onClick={() => setRideInfo(!rideInfo)}>Search</button>
              :
              <div> 
      
        <div className="ride-info">
            <div className="col-md-4 col-12">
                <img src={image} alt="" />
                <h4 >{name}</h4>
                <input className="input-field" type="date" placeholder="dd-mm-yyyy" value="" min="1997-01-01" max="2030-12-31"/>
                <span>${priceOne}</span>
            </div>
         </div>
         
         <div className="ride-info">
            <div className="col-md-4">
                <img src={image} alt="" />
                <h4>{name}</h4>
                <input className="input-field" type="date" placeholder="dd-mm-yyyy" value="" min="1997-01-01" max="2030-12-31"/> 
                <span>${priceTwo}</span>
                </div>
            </div>
  
        <div className="ride-info">
            <div className="col-md-5">
                <img src={image} alt="" />
                <h4>{name}</h4>
                <input className="input-field" type="date" placeholder="dd-mm-yyyy" value="" min="1997-01-01" max="2030-12-31"/>
                <span className="price3">${priceThree}</span>
                </div>
            </div>
            </div> 
            }

        </div>
        
        <div className="col-md-7 col-12 google-map">
        <GoogleMap></GoogleMap>
        </div>

    </div>
    </div>
    </div>
    </div>
    );

};
export default Destination;