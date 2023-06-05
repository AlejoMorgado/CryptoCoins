import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../components/Graph.css';

function ChartDisplay({ coinId, displayName, displayPrice }) {
  const prices = coinId.prices.map(([, price]) => price);
  const averagePrice = prices.reduce((total, price) => total + price, 0) / prices.length;

  return (
    <div className='graphContainer'>
      <div className='graphWrapper'>
        <h2 className='graphTitle'>Sales Activity</h2>
        <div className='graphPriceContainer' >
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
                  data: prices,
                  borderRadius: 8,
                  backgroundColor: 'rgba(104,107,127,255)',
                  borderColor: 'rgba(104,107,127,255)',
                  hoverBackgroundColor: 'rgba(194,238,10,255)',
                  hoverBorderColor: 'rgba(194,238,10,255)',
                  fill: true,
                  order: 2,
                  borderDash: [10, 10],
                },
                {
                  label: '',
                  data: Array(prices.length).fill(averagePrice),
                  type: 'scatter',
                  borderWidth: 2,
                  backgroundColor: 'rgba(194,238,10,255)',
                  fill: false,
                  order: 1,
                  legend: {
                    display: false
                }
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
                    drawBorder: false,
                    display: false,
                  },
                  beginAtZero: false
                },
                x: {
                  grid: {
                    drawBorder: false,
                    color: 'rgba(194,238,10,255)', 
                    display: false
                  },
                  position: "top"
                },
              },
            }}
          />
          
          )}
          <p className='priceText'>${displayPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace('.', ',')} USD</p>
        </div>
      </div>

    </div>
  );
}

export default ChartDisplay;
