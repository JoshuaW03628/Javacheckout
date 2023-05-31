// Function to compare player's points to the stored average
function comparePoints(event) {
  event.preventDefault(); // Prevent form submission

  // Get the player name and test points from the form
  const playerName = document.getElementById('player-name').value;
  const testPoints = parseInt(document.getElementById('test-points').value);

  console.log('Player Name:', playerName);
  console.log('Test Points:', testPoints);

  // Fetch the CSV file containing player data
  fetch('player_data.csv')
    .then(response => response.text())
    .then(data => {
      console.log('CSV Data:', data);

      // Parse the CSV data
      const rows = data.split('\n');
      console.log('CSV Rows:', rows);

      const players = {};
      rows.slice(1).forEach(row => { // Skip the header row
        const columns = row.split(',');
        const name = columns[1].replace(/"/g, ''); // Remove double quotes from player name
        const average = parseFloat(columns[18]); // Index 18 for PPG
        players[name] = average;
      });

      console.log('Players:', players);

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

// Add event listener to the compare button
const compareBtn = document.getElementById('compare-btn');
compareBtn.addEventListener('click', comparePoints);

// Add event listener to ensure the DOM is loaded before adding the button event listener
document.addEventListener('DOMContentLoaded', () => {
  compareBtn.addEventListener('click', comparePoints);
});
