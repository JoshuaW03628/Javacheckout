// Get references to HTML elements
const playerNameInput = document.getElementById('playerName');
const lineInput = document.getElementById('line');
const categorySelect = document.getElementById('category');
const testButton = document.getElementById('testButton');
const resultDiv = document.getElementById('result');

// Define statistical categories and their respective weightings
const categories = {
  points: 1,
  rebounds: 1.2,
  assists: 1.5,
};

// Function to test player props line
function testPlayerProps() {
  const playerName = playerNameInput.value;
  const line = parseFloat(lineInput.value);
  const category = categorySelect.value;

  if (!playerName || isNaN(line) || !category) {
    resultDiv.textContent = 'Please enter valid inputs.';
    return;
  }

  // Simulate player performance
  const performance = simulatePerformance(category);

  if (performance >= line) {
    resultDiv.textContent = `${playerName} exceeded the line!`;
    resultDiv.classList.add('win');
    resultDiv.classList.remove('loss');
  } else {
    resultDiv.textContent = `${playerName} did not reach the line.`;
    resultDiv.classList.add('loss');
    resultDiv.classList.remove('win');
  }
}

// Function to simulate player performance based on category
function simulatePerformance(category) {
  const maxPerformance = 30;
  const weighting = categories[category];
  const performance = Math.random() * maxPerformance;

  return performance * weighting;
}

// Event listener for test button
testButton.addEventListener('click', testPlayerProps);
