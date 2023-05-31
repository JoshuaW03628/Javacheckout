// Function to compare player's points to the stored average
function comparePoints() {
  // Get the player name and test points from the form
  const playerName = document.getElementById('player-name').value;
  const testPoints = parseInt(document.getElementById('test-points').value);

  // Fetch the CSV file containing player data
  fetch('player_data.csv')
    .then(response => response.text())
    .then(data => {
      // Parse the CSV data
      const rows = data.split('\n');
      const players = {};
      rows.forEach(row => {
        const columns = row.split(',');
        const name = columns[0];
        const average = parseFloat(columns[1]);
        players[name] = average;
      });

      // Check if the player exists in the data
      if (players.hasOwnProperty(playerName)) {
        const playerAverage = players[playerName];
        const result = testPoints > playerAverage ? 'above' : 'below';
        document.getElementById('result').textContent = `The test points for ${playerName} are ${result} the average (${playerAverage}).`;
      } else {
        document.getElementById('result').textContent = `Player '${playerName}' not found in the data.`;
      }
    })
    .catch(error => {
      console.log('Error fetching player data:', error);
    });
}

// Add event listener to the form
const form = document.getElementById('comparison-form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  comparePoints();
});
