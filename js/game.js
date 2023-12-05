// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

// interactive question games
// Get the instructions from Chatgpt by asking how to get different results from typing differnt numbers (1-10) in JavaScript

const luckyNumberInput = document.getElementById('luckyNumberInput');
const submitButton = document.getElementById('submitButton');
const resultSection = document.getElementById('resultSection');
const displayedNumber = document.getElementById('displayedNumber');
const coffeeName = document.getElementById('coffeeName');
const fortuneText = document.getElementById('fortuneText');
const resultImg = document.getElementById('resultImg');
const resultContainer = document.getElementById('resultContainer');
const gameSection = document.getElementById('game');

submitButton.addEventListener('click', function () {
	const enteredNumber = parseInt(luckyNumberInput.value);

	if (enteredNumber >= 1 && enteredNumber <= 10) {
		// Set the displayed number in the result section
		displayedNumber.textContent = enteredNumber;

		// Set corresponding coffee name and fortune
		setCoffeeAndFortune(enteredNumber);

		// Display the result section
		resultContainer.style.display = 'block';

		// Hide the game section
		gameSection.style.display = 'none';
	} else {
		alert('Please enter a number between 1 and 10.');
	}
});

function setCoffeeAndFortune(number) {
	switch (number) {
		case 1:
			coffeeName.textContent = 'Matcha Latte';
			fortuneText.textContent = 'An exciting opportunity lies ahead of you.';
			resultImg.src = 'images/matcha latte.png';
			break;
		case 2:
			coffeeName.textContent = 'Cappuccino';
			fortuneText.textContent = 'You will always be surrounded by true friends.';
			resultImg.src = 'images/result-cappuccino.png';
			break;
		case 3:
			coffeeName.textContent = 'Ice Latte';
			fortuneText.textContent = 'A routine task will turn into an enchanting adventure.';
			resultImg.src = 'images/result-latte.png';
			break;
		case 4:
			coffeeName.textContent = 'Chai Latte';
			fortuneText.textContent = 'Dance as if no one is watching.';
			resultImg.src = 'images/chai latte.png';
			break;
		case 5:
			coffeeName.textContent = 'Cold Brew';
			fortuneText.textContent = 'The one you love is closer than you think.';
			resultImg.src = 'images/result-coldbrew.png';
			break;
		case 6:
			coffeeName.textContent = 'Ice Americano';
			fortuneText.textContent = 'Expect the unexpected.';
			resultImg.src = 'images/result-americano.png';
			break;
		case 7:
			coffeeName.textContent = 'Matcha Lemonade';
			fortuneText.textContent = 'Life is what happens to you while you are busy making other plans.';
			resultImg.src = 'images/result-matchalemonade.png';
			break;
		case 8:
			coffeeName.textContent = 'Pink Drink';
			fortuneText.textContent = 'Love is something that finds you.';
			resultImg.src = 'images/pink drink.png';
			break;
		case 9:
			coffeeName.textContent = 'Vanilla Cold Brew';
			fortuneText.textContent = 'Happy News is on its way.';
			resultImg.src = 'images/vanilla.png';
			break;
		case 10:
			coffeeName.textContent = 'Ice Espresso';
			fortuneText.textContent = 'Plan for many pleasures ahead.';
			resultImg.src = 'images/result-espresso.png';
			break;
	}
}
