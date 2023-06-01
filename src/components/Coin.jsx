import React from 'react';

const Coin = ({ coinElement, setCoin }) => {

  return (
    <div className="coinCard" key={coinElement.id}>
      <div className='leftSideWrapper'>
        <img className='imageIcon' src={coinElement.image} alt={coinElement.name} />
        <div className='leftSideContainer'>
          <p id="nameTag" className='descriptionTags'>{coinElement.name}</p>
          <p id="symbolTag" className='descriptionTags'>{coinElement.symbol}</p>
        </div>
      </div>
      <p id='priceTag'>{coinElement.current_price}</p>
    </div>
  );
};

export default Coin;
