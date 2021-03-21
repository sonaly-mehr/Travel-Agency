import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import rideData from '../../rideData/rideData.json';
import ShipmentDetail from '../ShipmentDetail/ShipmentDetail';

const Shipment = () => {
    const {rideId} = useParams();
    const [rides, setRides] =useState([]);
    useEffect(()=>{
      const data =rideData.slice(0, 3);
      setRides(data);
    })
    return (
        <div>
            {
             rides.map(ride=> <ShipmentDetail ride={{ride}}></ShipmentDetail>)
            }
        </div>
    );
};

export default Shipment;