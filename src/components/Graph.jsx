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
            data={{
              labels: historyData.prices.map(([timestamp]) =>
                new Date(timestamp).toLocaleDateString()
              ),
              datasets: [
                {
                  data: historyData.prices.map(([, price]) => price),
                  backgroundColor: 'rgba(104,107,127,255)',
                  borderColor: 'rgba(104,107,127,255)',
                  hoverBackgroundColor: 'rgba(194,238,10,255)',
                  hoverBorderColor: 'rgba(194,238,10,255)', 
                  fill: true,
                },
              ],
            }}
            options={{
              indexAxis: 'x', 
              plugins: {
                legend: {
                  display: false, 
                },
              },
              scales: {
                y: {
                  display: false,
                  beginAtZero: true,
                  ticks: {
                    display: false,
                  },
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ChartDisplay;
