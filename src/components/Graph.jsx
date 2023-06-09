import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import "../components/Graph.css";

const Graph = ({ coinId, currentCoin }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current?.chartInstance;

    if (chartInstance) {
      chartInstance.destroy();
    }
  }, [coinId]);

  if (!coinId || !coinId.prices) {
    return null;
  }

  const prices = coinId.prices.map(([timestamp, price]) => price);
  const averagePrice =
    prices.reduce((total, price) => total + price, 0) / prices.length;

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
        beginAtZero: false,
      },
      x: {
        grid: {
          drawBorder: false,
          color: "rgba(194,238,10,255)",
          display: false,
        },
        position: "top",
      },
    },
  };

  const dataConfig = {
    labels: coinId.prices.map(([timestamp]) =>
      new Date(timestamp).toLocaleDateString()
    ),
    datasets: [
      {
        label: "",
        data: prices,
        borderRadius: 8,
        backgroundColor: "rgba(104,107,127,255)",
        borderColor: "rgba(104,107,127,255)",
        hoverBackgroundColor: "rgba(194,238,10,255)",
        hoverBorderColor: "rgba(194,238,10,255)",
        fill: true,
        order: 2,
        borderDash: [10, 10],
      },
      {
        label: "Average",
        data: Array(prices.length).fill(averagePrice),
        type: "line",
        borderColor: "#C9EC4Cff",
        borderWidth: 2,
        borderDash: [2, 2],
        pointRadius: 0,
        fill: false,
        order: 1,
      },
    ],
  };

  return (
    <div className="graphContainer">
      <div className="graphLeftSide">
        <div className="headerSection">
          <div className="introductionContainer">
            <h2 className="graphTitle">Sales Activity</h2>
            <p className="descriptionText">
              Here you can compare sales channel to determine the most effective
              channels and develop a sales strategy based on this data.
            </p>
          </div>
        </div>
        <div className="graphPriceContainer">
          <Bar
            ref={chartRef}
            className="chart"
            data={dataConfig}
            options={options}
          />
        </div>
      </div>
      <div className="graphRightSide">
        <div className="nameText">
          <p>{currentCoin.name}</p>
        </div>
        <p className='priceText'>${currentCoin.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace('.', ',')} USD</p>
      </div>
    </div>
  );
};

export default Graph;
