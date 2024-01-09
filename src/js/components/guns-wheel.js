const gunsWheelInit = () => {
	const gunItem = document.querySelectorAll('.guns__wheel-gun');
	const gunImage = document.querySelector('.guns__img');
	const textField = document.querySelector('.guns__gun-name');
	const valueField = document.querySelectorAll('.guns__value');

	gunItem.forEach((item) => {
		item.addEventListener('mouseover', (event) => {
			textField.textContent = event.target.dataset.value;
			gunImage.setAttribute('src', `./img/guns/${event.target.dataset.value}.webp`);
			gunImage.setAttribute('alt', `${event.target.dataset.value}`);
		});
	});

	gunItem.forEach((item) => {
		item.addEventListener('mouseover', (event) => {
			const dataSet = event.target.dataset;
			valueField[0].textContent = dataSet.type;
			valueField[1].textContent = dataSet.mode;
			valueField[2].textContent = dataSet.damage;
			valueField[3].textContent = dataSet.ammo;
			valueField[4].textContent = dataSet.range;
		});
	});
};

export default gunsWheelInit;
