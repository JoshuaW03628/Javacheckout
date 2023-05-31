import { fetchCSVData, calculatePlayerAverage } from './csvHandler.js';

// Get references to HTML elements
const addButton = document.getElementById('addButton');
const testButton = document.getElementById('testButton');
const resultDiv = document.getElementById('result');
const playerPropsFields = document.getElementById('playerPropsFields');

// Function to handle adding a new player props field
function addPlayerPropsField() {
  // ... (remaining code for adding a player props field)
}

// Function to test player props lines
async function testPlayerProps() {
  const playerPropsFields = document.getElementsByClassName('playerPropsField');

  // Clear result div
  resultDiv.innerHTML = '';

  // Fetch the CSV data
  const csvData = await fetchCSVData('/Users/josh/Javacheckout/nba_player_statistics.csv');

  // Iterate over each player props field
  Array.from(playerPropsFields).forEach(async (field) => {
    const firstName = field.querySelector('.firstName').value;
    const lastName = field.querySelector('.lastName').value;
    const line = parseFloat(field.querySelector('.line').value);
    const category = field.querySelector('.category').value;

    if (!firstName || !lastName || isNaN(line) || !category) {
      resultDiv.textContent = 'Please enter valid inputs.';
      return;
    }

    // Perform your logic to check if the player hits the line using the CSV data or any other method
    const playerResult = calculatePlayerAverage(csvData, firstName, lastName, category);
    if (playerResult) {
      // Player hits the line
      const playerResultElement = document.createElement('p');
      playerResultElement.textContent = playerResult;
      resultDiv.appendChild(playerResultElement);
    } else {
      // Player doesn't hit the line
      // You can customize the message or take any other action here
    }
  });
}

// Event listener for add button
addButton.addEventListener('click', addPlayerPropsField);

// Event listener for test button
testButton.addEventListener('click', testPlayerProps);
