const fetchSearch = async () => {
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/search?query=`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default fetchSearch;
