//your JS code here. If required.
// function inCrementCounter() {
// 	var crementElement = document.getElemetById('counter');
// 	var crementValue = parseInt(crementElement.innerText);
// 	alert('un-incremented value :' + crementValue);
// 	crementElement.innerText = crementValue + 1;
// }

let count = 0;
const counter = document.getElementById("counter");
const btn = document.getElementById("incrementBtn");

btn.addEventListener("click", function incrementCounter() {
	count++;
	alert(counter.innerText = `${count}`);
});
