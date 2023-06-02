import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../components/Graph.css';

function ChartDisplay({ coinId, displayName, displayPrice }) {
  const calculateAverage = () => {
    if (!coinId || coinId.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < coinId.length; i++) {
        sum += coinId[i][1];
    }

    return sum / coinId.length;
};

const averageValue = calculateAverage();

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
                    type: 'line',
                    data: coinId.prices.map(([, price]) => averageValue),
                    borderColor: '#C9EC4Cff',
                    borderWidth: 3,
                    borderDash: [3, 3],
                    fill: false,
                    pointRadius: 0,
                    order: 0,
                },
                  {
                    label: displayName,
                    data: coinId.prices.map(([, price]) => price),
                    borderRadius: 5,
                    backgroundColor: 'rgba(104,107,127,255)',
                    borderColor: 'rgba(104,107,127,255)',
                    hoverBackgroundColor: 'rgba(194,238,10,255)',
                    hoverBorderColor: 'rgba(194,238,10,255)',
                    fill: true,
                    order:1,
                  },
                ],
              }}
              options={{
                scales: {
                  y: {
                    ticks: {
                      display: false,
                    },
                    beginAtZero: false
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
