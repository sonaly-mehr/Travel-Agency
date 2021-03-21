import React from 'react';
import { Link } from 'react-router-dom';
import './HomeDetails.css';

const HomeDetails = (props) => {
        const {image, name, id} =props.rData;
    return (
        
        <div className="col-md-3">
            <div className="Ride_info">
            <img src={image} alt=""/>
            <h3>{name}</h3>
            <button><Link to={`/shipment/${id}`}></Link></button>
            </div>
        </div>
    );
};

export default HomeDetails;