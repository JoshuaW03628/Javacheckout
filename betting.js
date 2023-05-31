// Get references to HTML elements
const teamSelect = document.getElementById('teamSelect');
const betAmountInput = document.getElementById('betAmount');
const placeBetButton = document.getElementById('placeBetButton');
const resultDiv = document.getElementById('result');

// Function to handle the bet placement
function placeBet() {
  const selectedTeam = teamSelect.value;
  const betAmount = parseFloat(betAmountInput.value);

  if (isNaN(betAmount) || betAmount <= 0) {
    resultDiv.textContent = 'Please enter a valid bet amount.';
    return;
  }

  const winningTeam = Math.random() < 0.5 ? 'team1' : 'team2';

  if (selectedTeam === winningTeam) {
    const winnings = calculateWinnings(betAmount);
    resultDiv.textContent = `Congratulations! You won $${winnings.toFixed(2)}!`;
  } else {
    resultDiv.textContent = `Sorry, you lost your bet of $${betAmount.toFixed(2)}.`;
  }
}

// Function to calculate winnings
function calculateWinnings(betAmount) {
  const odds = 2; // Example: 2x payout for winning
  return betAmount * odds;
}

// Event listener for place bet button
placeBetButton.addEventListener('click', placeBet);
