// Get references to HTML elements
const playerForm = document.getElementById('playerForm');
const addButton = document.getElementById('addButton');
const testButton = document.getElementById('testButton');
const resultDiv = document.getElementById('result');

// Function to handle adding a new player props field
function addPlayerPropsField() {
  // ... code for adding a new player props field ...
}

// Function to test player props line
function testPlayerProps() {
  const playerPropsFields = document.getElementsByClassName('playerPropsField');

  // Clear result div
  resultDiv.innerHTML = '';

  // Iterate over each player props field
  Array.from(playerPropsFields).forEach((field) => {
    const playerName = field.querySelector('.playerName').value;
    const line = parseFloat(field.querySelector('.line').value);
    const category = field.querySelector('.category').value;

    if (!playerName || isNaN(line) || !category) {
      resultDiv.textContent = 'Please enter valid inputs.';
      return;
    }

    // Simulate player performance
    const performance = simulatePerformance(category);

    const resultText = performance >= line ? 'exceeded the line!' : 'did not reach the line.';
    const playerResult = `${playerName} ${resultText}`;
    const playerResultElement = document.createElement('p');
    playerResultElement.textContent = playerResult;
    resultDiv.appendChild(playerResultElement);
  });
}

// Event listener for add button
addButton.addEventListener('click', addPlayerPropsField);

// Event delegation for test button
playerForm.addEventListener('click', function (event) {
  if (event.target && event.target.id === 'testButton') {
    testPlayerProps();
  }
});
