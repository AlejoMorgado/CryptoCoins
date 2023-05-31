const fetchHistory = async () => {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/ripple/market_chart?vs_currency=usd&days=30&interval=daily');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default fetchHistory;
