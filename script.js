//your JS code here. If required.
// function inCrementCounter() {
// 	var crementElement = document.getElemetById('counter');
// 	var crementValue = parseInt(crementElement.innerText);
// 	alert(crementValue);
// 	crementElement.innerText = crementValue + 1;
// }
// ---------------------------------------------------------
// let count = 0;
// const counter = document.getElementById("counter");
// const btn = document.getElementById("incrementBtn");

// btn.addEventListener("click", function incrementCounter() {
// 	count++;
// 	alert(counter.innerText = `${count}`);
// });


function incrementCounter() {
      // Get the counter paragraph element
      var counterParagraph = document.getElementById('counter');

      // Get the current value of the counter
      var currentValue = parseInt(counterParagraph.textContent);

      // Display an alert with the un-incremented value
      alert(currentValue);

      // Increment the counter value
      currentValue++;

      // Update the counter paragraph with the new value
      counterParagraph.textContent = currentValue;
    }