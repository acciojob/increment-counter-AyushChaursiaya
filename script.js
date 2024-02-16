// Get references to the counter paragraph and the increment button
const counterParagraph = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');

// Function to handle the button click
function incrementCounter() {
  // Get the current value of the counter
  let currentValue = parseInt(counterParagraph.textContent);

  // Display an alert with the un-incremented value
  alert("Current counter value: " + currentValue);

  // Increment the counter value
  currentValue++;

  // Update the counter paragraph with the new value
  counterParagraph.textContent = currentValue;
}

// Add event listener to the increment button
incrementButton.addEventListener('click', incrementCounter);
