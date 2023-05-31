import React, { useState, useEffect } from 'react';
import fetchHistory from '../helpers/fetchHistory';
import { Bar } from 'react-chartjs-2';
import '../components/Graph.css';

function ChartDisplay() {
  const [historyData, setHistoryData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetchHistory();
      setHistoryData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='graphContainer'>
      <h2>Sales Activity</h2>
      <div>
        {historyData && (
          <Bar
            className='chart'

          />
        )}
      </div>
    </div>
  );
}

export default ChartDisplay;
