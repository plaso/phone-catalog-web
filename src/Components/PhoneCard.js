import React from 'react';

const PhoneCard = ({phone, handleClick}) => {


  return (
    <div className="col-12 col-md-6 col-xl-3">
      <div className="card" onClick={() => handleClick(phone)}>
        <div className="card-img">
          <img src={phone.img} alt={phone.name} />
        </div>
        <div className="card-body">
          <h3>{phone.name}</h3>
          <p className="card-price"><strong>{phone.price}€</strong></p>
        </div>
        <div className="card-btn">
          <span>See details</span>
        </div>
      </div>
    </div>
  )
};

export default PhoneCard;