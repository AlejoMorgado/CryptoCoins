import React from 'react';

const Coin = ({ coin }) => {
  return (
    <div className='flexDirection' key={coin.id}>
      <div className='leftSide'>
        <img className='imageIcon' src={coin.image} alt={coin.name} />
        <div style={{textAlign: "left"}}>
          <p className='nameContainer'>{coin.name}</p>
          <p className='nameContainer'>{coin.symbol}</p>
        </div>
      </div>
      <p>{coin.current_price}</p>
    </div>
  );
};

export default Coin;
