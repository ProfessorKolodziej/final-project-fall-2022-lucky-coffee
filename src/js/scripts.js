// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)


// switch images for main page
//Get the instrustions from Chatgpt by asking how to add images switching and color changing in JavaScript

document.addEventListener('DOMContentLoaded', function () {
	const coffeeImage = document.getElementById('coffee1');
	const circle1 = document.getElementById('circle1');
	const circle2 = document.getElementById('circle2');
	const circle3 = document.getElementById('circle3');

	const imagePaths = [
		'images/coffee1.png',
		'images/coffee2.png',
		'images/coffee3.png',
	];

	circle1.addEventListener('click', function () {
		showCoffeeImage(0);
	});

	circle2.addEventListener('click', function () {
		showCoffeeImage(1);
	});

	circle3.addEventListener('click', function () {
		showCoffeeImage(2);
	});

	function showCoffeeImage(index) {
		coffeeImage.src = imagePaths[index];

		updateCircleColors(index);
	}

	function updateCircleColors(selectedIndex) {
		const colors = ['#653208', 'white'];

		[circle1, circle2, circle3].forEach((circle, index) => {
			const color = (index === selectedIndex) ? colors[0] : colors[1];
			circle.setAttribute('fill', color);
		});
	}
});

// switch content for coffee beans
//Get the instrustions from Chatgpt by asking how to change content by clicking button in JavaScript

document.addEventListener('DOMContentLoaded', function () {
	const arabicaBeans = document.getElementById('Arabica');
	const robustaBeans = document.getElementById('Robusta');
	const libericaBeans = document.getElementById('Liberica');

	const arabicaIntroImg = document.getElementById('arabicaintro-img');
	const robustaIntroImg = document.getElementById('robustaintro-img');
	const libericaIntroImg = document.getElementById('libericaintro-img');

	arabicaIntroImg.style.display = 'block';
	robustaIntroImg.style.display = 'none';
	libericaIntroImg.style.display = 'none';

	arabicaBeans.addEventListener('click', function () {
		hideAllIntros();
		showIntro(arabicaIntroImg, arabicaBeans);
	});

	robustaBeans.addEventListener('click', function () {
		hideAllIntros();
		showIntro(robustaIntroImg, robustaBeans);
	});

	libericaBeans.addEventListener('click', function () {
		hideAllIntros();
		showIntro(libericaIntroImg, libericaBeans);
	});

	function showIntro(introImg, clickedBeans) {
		introImg.style.display = 'block';
		clickedBeans.style.color = 'white';
		clickedBeans.style.border = '4px solid var(--brown-red, #873E3F)';
		clickedBeans.style.background = '#873E3F';
	}

	function hideAllIntros() {
		[arabicaIntroImg, robustaIntroImg, libericaIntroImg].forEach(introImg => {
			introImg.style.display = 'none';
		});

		[arabicaBeans, robustaBeans, libericaBeans].forEach(beans => {
			beans.style.color = '#873E3F';
			beans.style.border = '4px solid var(--brown-red, #873E3F)';
			beans.style.background = '#EED0B4';
		});
	}
});
