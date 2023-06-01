import './App.css';
import CoinsList from './components/CoinsList';
import Graph from './components/Graph';
import fetchHistory from './helpers/fetchHistory';
import { useState } from 'react';

function App() {
  const [historyData, setHistoryData] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetchHistory();
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
      <Graph coinId={historyData} />
      <CoinsList setCoin={setHistoryData} />
    </div>
  );
}

export default App;
