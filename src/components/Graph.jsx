import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../components/Graph.css';

function ChartDisplay({ coinId, displayName, displayPrice }) {

  return (
    <div className='graphContainer'>
      <div className='graphWrapper'>
        <h2 className='graphTitle'>Sales Activity</h2>
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
                    label: displayName,
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
      <p className='priceText'>${displayPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
    </div>
  );
}

export default ChartDisplay;
