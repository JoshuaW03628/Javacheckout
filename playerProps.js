// Get references to HTML elements
const addButton = document.getElementById('addButton');
const testButton = document.getElementById('testButton');
const resultDiv = document.getElementById('result');

// Function to handle adding a new player props field
function addPlayerPropsField() {
  const playerPropsField = document.createElement('div');
  playerPropsField.classList.add('playerPropsField');

  const firstNameGroup = document.createElement('div');
  firstNameGroup.classList.add('form-group');
  const firstNameLabel = document.createElement('label');
  firstNameLabel.textContent = 'First Name:';
  const firstNameInput = document.createElement('input');
  firstNameInput.type = 'text';
  firstNameInput.classList.add('firstName');
  firstNameInput.placeholder = 'Enter first name';
  firstNameGroup.appendChild(firstNameLabel);
  firstNameGroup.appendChild(firstNameInput);

  const lastNameGroup = document.createElement('div');
  lastNameGroup.classList.add('form-group');
  const lastNameLabel = document.createElement('label');
  lastNameLabel.textContent = 'Last Name:';
  const lastNameInput = document.createElement('input');
  lastNameInput.type = 'text';
  lastNameInput.classList.add('lastName');
  lastNameInput.placeholder = 'Enter last name';
  lastNameGroup.appendChild(lastNameLabel);
  lastNameGroup.appendChild(lastNameInput);

  const lineGroup = document.createElement('div');
  lineGroup.classList.add('form-group');
  const lineLabel = document.createElement('label');
  lineLabel.textContent = 'Line:';
  const lineInput = document.createElement('input');
  lineInput.type = 'number';
  lineInput.step = '0.5';
  lineInput.classList.add('line');
  lineInput.placeholder = 'Enter line';
  lineGroup.appendChild(lineLabel);
  lineGroup.appendChild(lineInput);

  const categoryGroup = document.createElement('div');
  categoryGroup.classList.add('form-group');
  const categoryLabel = document.createElement('label');
  categoryLabel.textContent = 'Category:';
  const categorySelect = document.createElement('select');
  categorySelect.classList.add('category');
  const pointsOption = document.createElement('option');
  pointsOption.value = 'points';
  pointsOption.textContent = 'Points';
  const reboundsOption = document.createElement('option');
  reboundsOption.value = 'rebounds';
  reboundsOption.textContent = 'Rebounds';
  const assistsOption = document.createElement('option');
  assistsOption.value = 'assists';
  assistsOption.textContent = 'Assists';
  categorySelect.appendChild(pointsOption);
  categorySelect.appendChild(reboundsOption);
  categorySelect.appendChild(assistsOption);
  categoryGroup.appendChild(categoryLabel);
  categoryGroup.appendChild(categorySelect);

  playerPropsField.appendChild(firstNameGroup);
  playerPropsField.appendChild(lastNameGroup);
  playerPropsField.appendChild(lineGroup);
  playerPropsField.appendChild(categoryGroup);

  document.getElementById('playerForm').insertBefore(playerPropsField, testButton);
}

// Function to test player props lines
async function testPlayerProps() {
  const playerPropsFields = document.getElementsByClassName('playerPropsField');

  // Clear result div
  resultDiv.innerHTML = '';

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

    try {
      // Fetch player data from the API
      const response = await fetch(`https://api.example.com/players?firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}`);
      const data = await response.json();

      if (response.ok && data.length > 0) {
        const player = data[0]; // Assuming the API returns an array of players and we only need the first result

        // Get the player's statistics for the specified category
        const playerStats = player[category];

        if (playerStats >= line) {
          const resultText = 'exceeded the line!';
          const playerResult = `${firstName} ${lastName} ${resultText}`;
          const playerResultElement = document.createElement('p');
          playerResultElement.textContent = playerResult;
          resultDiv.appendChild(playerResultElement);
        } else {
          const resultText = 'did not reach the line.';
          const playerResult = `${firstName} ${lastName} ${resultText}`;
          const playerResultElement = document.createElement('p');
          playerResultElement.textContent = playerResult;
          resultDiv.appendChild(playerResultElement);
        }
      } else {
        resultDiv.textContent = `Player '${firstName} ${lastName}' not found.`;
      }
    } catch (error) {
      resultDiv.textContent = 'Error occurred while fetching player data.';
      console.error(error);
    }
  });
}

// Event listener for add button
addButton.addEventListener('click', addPlayerPropsField);

// Event listener for test button
testButton.addEventListener('click', testPlayerProps);


