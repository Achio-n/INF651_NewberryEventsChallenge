//INF651 - Professor Ramsey Muvva
//Jesse Newberry
//July 14, 2025 => pushing the time limit a bit.
//Events Challenge

//First get all inputs and output elements from the page
const nameInput = document.getElementById('nameInput');
const submitButton = document.getElementById('submitButton');
const outputDiv = document.getElementById('outputDiv');
const tracker = document.getElementById('mouseTracker');
const coordinates = document.getElementById('coordinates');

// Check for no name and style accordingly. Output the message to the outputdiv whether good or bad. 
function handleSubmit() {
  const name = nameInput.value.trim();

  if (name === '') {
    outputDiv.textContent = 'Error: Please enter a name.';
    outputDiv.style.color = 'red';
    outputDiv.style.backgroundColor = 'transparent'; // Reset background
  } else {
    outputDiv.textContent = `Welcome, ${name}! Have fun with the Events Challenge!`;
    outputDiv.style.color = 'black';
    outputDiv.style.backgroundColor = 'blue';
  }
}

// Listen for the click event and execute function when clicked.
submitButton.addEventListener('click', handleSubmit);

// Alternatively, listen for the keydown of the enter key. 
nameInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleSubmit();
  }
});

// Listen for mouse movement and then get the coordinates of the position. Then output to the proper div.
tracker.addEventListener('mousemove', (event) => {
  const rect = tracker.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  coordinates.textContent = `Mouse Coordinates: X: ${x}, Y: ${y}`;
});
//Reset coords to 0 if the mouse leaves the div
tracker.addEventListener('mouseleave', () => {
  coordinates.textContent = 'Mouse Coordinates: X: 0, Y: 0';
});
