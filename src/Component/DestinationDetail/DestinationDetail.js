import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import rideData from '../../../src/rideData/rideData.json'
import Destination from '../Destination/Destination';

const DestinationDetail = () => {
  const { rideId } = useParams();
  let data =rideData.find(vehicles=> vehicles.id == rideId);
  console.log(data);

  return (
    <div>
      
      {
          <Destination data={data}></Destination>
      }
    </div>
  );
};

export default DestinationDetail;