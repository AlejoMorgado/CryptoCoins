import React from "react";

const Coin = ({ coinElement, setCoinId, setCurrentCoin }) => {
  const handleClick = (id) => {
    setCoinId(id);
    setCurrentCoin({
      name: coinElement.name,
      price: coinElement.current_price,
    });
  };

  return (
    <div
      className="coinCard"
      key={coinElement.id}
      onClick={() => handleClick(coinElement.id)}
    >
      <div className="leftSideWrapper">
        <img
          className="imageIcon"
          src={coinElement.large}
          alt={coinElement.name}
        />
        <div className="leftSideContainer">
          <p id="nameTag" className="descriptionTags">
            {coinElement.name}
          </p>
          <p id="symbolTag" className="descriptionTags">
            {coinElement.symbol}
          </p>
        </div>
      </div>
      <p id="priceTag">
        $
        {coinElement.current_price
          .toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
          .replace(".", ",")}
      </p>
    </div>
  );
};

export default Coin;
