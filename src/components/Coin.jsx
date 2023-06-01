import React from 'react';

const Coin = ({ coinElement, setCoinId, setCoinName, setCoinPrice }) => {

  const handleClick = (id, name, price) => {
    setCoinId(id);
    setCoinName(name)
    setCoinPrice(price)
  };
  

  return (
    <div className="coinCard" key={coinElement.id} onClick={() => handleClick(coinElement.id, coinElement.name, coinElement.current_price)}>
      <div className='leftSideWrapper'>
        <img className='imageIcon' src={coinElement.image} alt={coinElement.name} />
        <div className='leftSideContainer'>
          <p id="nameTag" className='descriptionTags'>{coinElement.name}</p>
          <p id="symbolTag" className='descriptionTags'>{coinElement.symbol}</p>
        </div>
      </div>
      <p id='priceTag'>${coinElement.current_price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
    </div>
  );
};

export default Coin;
