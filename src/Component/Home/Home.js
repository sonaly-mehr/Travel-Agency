import React, { useEffect, useState } from 'react';
import './Home.css';
import background from '../../Bg.png';
import Data from '../../../src/rideData/rideData.json';
import HomeDetails from '../HomeDetails/HomeDetails';


const Home = () => {
    const [rideData, setrideData] = useState([]);

    useEffect(()=> {
        setrideData(Data);
    },[])
    return (
        <div className="home-section">

       <div className="background-img">
                 <img src={background} alt=""/>
             

          <div className="rideData-wrap container">
              <div className="row">
                  
              
                {
                 rideData.map(rData => <HomeDetails rData= {rData}></HomeDetails>)
               }
            </div>
            </div>
            </div>
            
            </div>
    );
};

export default Home;