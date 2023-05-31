// Get references to HTML elements
const playerForm = document.getElementById('playerForm');
const addButton = document.getElementById('addButton');
const testButton = document.getElementById('testButton');
const resultDiv = document.getElementById('result');

// Function to handle adding a new player props field
function addPlayerPropsField() {
  // ... code for adding a new player props field ...

  // Update event listener for test button
  testButton.removeEventListener('click', testPlayerProps);
  testButton.addEventListener('click', testPlayerProps);
}

// Function to test player props line
function testPlayerProps() {
  const playerPropsFields = document.getElementsByClassName('playerPropsField');

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
    resultDiv.innerHTML += `<p>${playerResult}</p>`;
  });
}

// Event listener for add button
addButton.addEventListener('click', addPlayerPropsField);

// Event listener for test button
testButton.addEventListener('click', testPlayerProps);
