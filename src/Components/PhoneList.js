import React from 'react';
import PhoneCard from './PhoneCard';

const PhoneList = ({phones, handleClick}) => {
  const PhoneItems = phones.map( phone => {
    return (
      <PhoneCard phone={phone} key={phone.name} handleClick={handleClick} />
    );
  });


  return (
    <div>
      <div className="row">
        {PhoneItems}
      </div>
    </div>
  )
};

export default PhoneList;