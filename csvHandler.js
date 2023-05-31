async function fetchCSVData(csvFilePath) {
  try {
    const response = await fetch(csvFilePath);
    const csvData = await response.text();

    // Process the CSV data
    const parsedData = Papa.parse(csvData, { header: true }).data;
    return parsedData;

  } catch (error) {
    console.error('Error fetching CSV data:', error);
    return [];
  }
}

function calculatePlayerAverage(data, playerName) {
  // ...
  // Your implementation here
  // ...
}

export { fetchCSVData, calculatePlayerAverage };
