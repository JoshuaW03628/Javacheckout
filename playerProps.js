// Get references to HTML elements
const addButton = document.getElementById('addButton');
const testButton = document.getElementById('testButton');
const resultDiv = document.getElementById('result');
const playerPropsFields = document.getElementById('playerPropsFields');

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

  playerPropsFields.appendChild(playerPropsField);
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

    // Perform your logic to check if the player hits the line using the CSV data or any other method

    // Display the result
    const playerResult = `${firstName} ${lastName} hits the line!`;
    const playerResultElement = document.createElement('p');
    playerResultElement.textContent = playerResult;
    resultDiv.appendChild(playerResultElement);
  });
}

// Event listener for add button
addButton.addEventListener('click', addPlayerPropsField);

// Event listener for test button
testButton.addEventListener('click', testPlayerProps);
