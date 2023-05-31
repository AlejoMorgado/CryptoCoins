import React from 'react'

const Chart = () => {
  return (
    <div>
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
    </div>
  )
}

export default Chart