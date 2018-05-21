import React from 'react';

const PhoneDetail = ({phone, handleClick}) => {

    return(
      <div className="detail-phone">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="detail-img d-flex justify-content-center">
              <img src={phone.img} alt={phone.name} />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="detail-body">
              <h1>{phone.name}</h1>
              <p className="detail-description">{phone.description}</p>
              <p><strong>Color:</strong> {phone.color}</p>
              <p><strong>Screen size:</strong> {phone.size}</p>
            </div>
          </div>
        </div>
      </div>
    )
};

export default PhoneDetail;