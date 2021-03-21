import React from 'react';

const ShipmentDetail = (props) => {
    const {image, name, price} = props.ride;
    return (
        <div>
          <img src={image} alt=""/>
          <h4>{name}</h4>
          <h5>{price}</h5>
        </div>
    );
};

export default ShipmentDetail;