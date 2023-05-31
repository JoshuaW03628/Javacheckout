import { fetchCSVData, calculatePlayerAverage } from 'csvHandler.js';

// Get references to HTML elements
const addButton = document.getElementById('addButton');
const testButton = document.getElementById('testButton');
const resultDiv = document.getElementById('result');
const playerPropsFields = document.getElementById('playerPropsFields');
const nameInput = document.getElementById('nameInput');

// Function to handle adding a new player props field
function addPlayerPropsField() {
  // ... (remaining code for adding a player props field)
}

// Function to test player props lines
async function testPlayerProps() {
  // Clear result div
  resultDiv.innerHTML = '';

  // Fetch the CSV data
  const csvData = await fetchCSVData('nba_player_statistics.csv');

  // Get the name input
  const playerName = nameInput.value.trim();

  if (!playerName) {
    resultDiv.textContent = 'Please enter a valid player name.';
    return;
  }

  // Perform your logic to check if the player hits the line using the CSV data or any other method
  const playerResult = calculatePlayerAverage(csvData, playerName);
  if (playerResult) {
    // Player hits the line
    const playerResultElement = document.createElement('p');
    playerResultElement.textContent = playerResult;
    resultDiv.appendChild(playerResultElement);
  } else {
    // Player doesn't hit the line
    // You can customize the message or take any other action here
  }
}

// Event listener for add button
// Function to handle adding a new player props field
function addPlayerPropsField() {
  const playerPropsField = document.createElement('div');
  playerPropsField.className = 'playerPropsField';

  const playerKeyFormGroup = document.createElement('div');
  playerKeyFormGroup.className = 'form-group';

  const playerKeyLabel = document.createElement('label');
  playerKeyLabel.textContent = 'Player Key:';
  playerKeyLabel.setAttribute('for', 'playerKeyInput');

  const playerKeyInput = document.createElement('input');
  playerKeyInput.type = 'text';
  playerKeyInput.id = 'playerKeyInput';
  playerKeyInput.className = 'playerKeyInput';
  playerKeyInput.placeholder = 'Enter player key';

  playerKeyFormGroup.appendChild(playerKeyLabel);
  playerKeyFormGroup.appendChild(playerKeyInput);

  const categoryFormGroup = document.createElement('div');
  categoryFormGroup.className = 'form-group';

  const categoryLabel = document.createElement('label');
  categoryLabel.textContent = 'Category of Statistic:';
  categoryLabel.setAttribute('for', 'categoryInput');

  const categoryInput = document.createElement('input');
  categoryInput.type = 'text';
  categoryInput.id = 'categoryInput';
  categoryInput.className = 'categoryInput';
  categoryInput.placeholder = 'Enter category of statistic';

  categoryFormGroup.appendChild(categoryLabel);
  categoryFormGroup.appendChild(categoryInput);

  playerPropsField.appendChild(playerKeyFormGroup);
  playerPropsField.appendChild(categoryFormGroup);

  playerPropsFields.appendChild(playerPropsField);
}

// Event listener for test button
testButton.addEventListener('click', testPlayerProps);