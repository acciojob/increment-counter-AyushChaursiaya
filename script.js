//your JS code here. If required.
function inCrementCounter() {
	var crementElemet = document.getElemetById('counter');
	var crementValue = parseInt(crementElemet.innerText);
	alert('un-incremented value' + crementValue);
	crementElemet.innerText = crementValue + 1;
}