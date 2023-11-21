const fetchData = async () => {
  try {
    const URL = "http://localhost:5000";
    const response = await fetch(URL + "/generate");
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching Data! :", error);
  }
};


export default fetchData;