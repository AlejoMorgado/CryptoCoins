import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../components/Graph.css';

function ChartDisplay({ coinId }) {
  return (
    <div className='graphContainer'>
      <h2>Sales Activity</h2>
      <div>
        {coinId && coinId.prices && (
          <Bar
            className='chart'
            data={{
              labels: coinId.prices.map(([timestamp]) =>
                new Date(timestamp).toLocaleDateString()
              ),
              datasets: [
                {
                  label: coinId.id,
                  data: coinId.prices.map(([, price]) => price),
                  borderRadius: 5,
                  backgroundColor: 'rgba(104,107,127,255)',
                  borderColor: 'rgba(104,107,127,255)',
                  hoverBackgroundColor: 'rgba(194,238,10,255)',
                  hoverBorderColor: 'rgba(194,238,10,255)',
                  fill: true,
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  ticks: {
                    display: false,
                  },
                  grid: {
                    borderDash: [2, 4],
                    beginAtZero: true,
                    ticks: {
                      display: false,
                    },
                    color: 'rgba(194,238,10,255)',
                  },
                },
                x: {
                  position: 'top',
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
