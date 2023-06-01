import './App.css';
import CoinsList from './components/CoinsList';
import Graph from './components/Graph';
import fetchHistory from './helpers/fetchHistory';
import { useState } from 'react';
import initilaState from './resources/initialHistoryName';

function App() {
  const [historyData, setHistoryData] = useState(initilaState);
  const [coinName, setCoinName] = useState('Bitcoin');
  const [coinPrice, setCoinPrice] = useState('26,957.00')

  const fetchData = async (id) => {
    try {
      const data = await fetchHistory(id);
      setHistoryData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  if (historyData.length === 0) {
    fetchData();
  }

  return (
    <div className="App">
      <Graph coinId={historyData} displayName={coinName} displayPrice={coinPrice}/>
      <CoinsList setCoinId={fetchData} setCoinName={setCoinName} setCoinPrice={setCoinPrice}/>
    </div>
  );
}

export default App;