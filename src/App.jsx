import React, { useState, useEffect } from "react";
import fetchHistory from "./helpers/fetchHistory";
import fetchData from "./helpers/fetchCoinList";
import fetchCoinSearch from "./helpers/fetchCoinSearch";
import CoinsList from "./components/CoinsList";
import Graph from "./components/Graph";
import "./App.css";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [historyData, setHistoryData] = useState(null);
  const [currentCoin, setCurrentCoin] = useState({ name: "", price: 0 });

  const fetchCoinHistory = async (id) => {
    try {
      const data = await fetchHistory(id);
      setHistoryData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchCoinSearchData = async () => {
    try {
      const data = await fetchCoinSearch(searchTerm);
      setSearchData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  const fetchCoinList = async () => {
    try {
      const data = await fetchData();
      setCoinData(data);
      if (data.length > 0) {
        const firstId = data[0].id;
        const firstName = data[0].name;
        const firstPrice = data[0].current_price;
        fetchCoinHistory(firstId);
        setCurrentCoin({ name: firstName, price: firstPrice });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchCoinList();
  }, []);

  useEffect(() => {
    fetchCoinSearchData();
  }, [searchTerm]);

  return (
    <div className="App">
      <Graph coinId={historyData} currentCoin={currentCoin} />
      <CoinsList
        setCoinId={fetchCoinHistory}
        setCoinList={coinData}
        setCurrentCoin={setCurrentCoin}
        setSearchTerm={setSearchTerm}
        searchValue={searchTerm}
        searchData={searchData}
      />
    </div>
  );
};

export default App;
