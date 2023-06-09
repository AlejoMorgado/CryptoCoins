import React from "react";
import Coin from "./Coin.jsx";
import image from "../images/search-icon.png";
import "../components/CoinList.css";

const CoinList = ({
  setCoinId,
  setCoinList,
  setCurrentCoin,
  setSearchTerm,
  searchValue,
  searchData,
}) => {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCoins =
    searchData && searchData.coins && Array.isArray(searchData.coins)
      ? searchData.coins.filter((coin) => {
          const searchTerm = searchValue.toLowerCase();
          const nameMatch =
            coin.name && coin.name.toLowerCase().startsWith(searchTerm);
          const symbolMatch =
            coin.symbol &&
            coin.symbol.toLowerCase().startsWith(searchTerm);

          const isCoinInList = setCoinList.some(
            (setCoin) => setCoin.id === coin.id
          );

          if (isCoinInList) {
            const matchedCoin = setCoinList.find(
              (setCoin) => setCoin.id === coin.id
            );
            coin.current_price = matchedCoin.current_price;
          }

          return (nameMatch || symbolMatch) && isCoinInList;
        })
      : [];

  return (
    <div className="wrapperList">
      <div className="filterContainer">
        <h1>Control Panel</h1>
        <div className="filter">
          <input
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            className="filterInput"
            placeholder="Enter your search request..."
          />
          <button className="searchButton">
            <img className="searchIcon" src={image} alt="Search" />
          </button>
        </div>
      </div>
      <p id="cryptoTag">Crypto Currency</p>
      <div className="listContainer">
        {filteredCoins.map((coin) => (
          <Coin
            setCoinId={setCoinId}
            coinElement={coin}
            key={coin.id}
            setCurrentCoin={setCurrentCoin}
          />
        ))}
      </div>
    </div>
  );
};

export default CoinList;
