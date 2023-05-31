import React from 'react';

const Coin = ({ coin }) => {
  return (
    <div className='flexDirection' key={coin.id}>
      <div className='leftSide'>
        <img className='imageIcon' src={coin.image} alt={coin.name} />
        <div style={{textAlign: "left"}}>
          <p style={{fontWeight: "bolder", marginTop:"0px"}}className='nameContainer'>{coin.name}</p>
          <p style={{fontWeight: "lighter", color:"rgba(136,136,136,255)"}}className='nameContainer'>{coin.symbol}</p>
        </div>
      </div>
      <p style={{fontWeight: "bolder", margin:"0px"}}>${coin.current_price}</p>
    </div>
  );
};

export default Coin;
