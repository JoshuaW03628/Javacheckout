// Get references to HTML elements
const playerForm = document.getElementById('playerForm');
const addButton = document.getElementById('addButton');
const testButton = document.getElementById('testButton');
const resultDiv = document.getElementById('result');

// Function to handle adding a new player props field
function addPlayerPropsField() {
  const playerPropsField = document.createElement('div');
  playerPropsField.classList.add('playerPropsField');

  const playerNameLabel = document.createElement('label');
  playerNameLabel.textContent = 'Player Name:';
  const playerNameInput = document.createElement('input');
  playerNameInput.type = 'text';
  playerNameInput.classList.add('playerName');
  playerNameInput.placeholder = 'Enter player name';

  const lineLabel = document.createElement('label');
  lineLabel.textContent = 'Line:';
  const lineInput = document.createElement('input');
  lineInput.type = 'number';
  lineInput.step = '0.5';
  lineInput.classList.add('line');
  lineInput.placeholder = 'Enter line';

  const categoryLabel = document.createElement('label');
  categoryLabel.textContent = 'Category:';
  const categorySelect = document.createElement('select');
  categorySelect.classList.add('category');
  const optionPoints = document.createElement('option');
  optionPoints.value = 'points';
  optionPoints.textContent = 'Points';
  const optionRebounds = document.createElement('option');
  optionRebounds.value = 'rebounds';
  optionRebounds.textContent = 'Rebounds';
  const optionAssists = document.createElement('option');
  optionAssists.value = 'assists';
  optionAssists.textContent = 'Assists';

  categorySelect.appendChild(optionPoints);
  categorySelect.appendChild(optionRebounds);
  categorySelect.appendChild(optionAssists);

  playerPropsField.appendChild(playerNameLabel);
  playerPropsField.appendChild(playerNameInput);
  playerPropsField.appendChild(lineLabel);
  playerPropsField.appendChild(lineInput);
  playerPropsField.appendChild(categoryLabel);
  playerPropsField.appendChild(categorySelect);

  playerForm.insertBefore(playerPropsField, addButton);
}

// Event listener for add button
addButton.addEventListener('click', addPlayerPropsField);
