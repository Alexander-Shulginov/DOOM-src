const modalInit = () => {
	const imagElem = document.querySelectorAll('.location__img');
	const closeBtn = document.querySelector('.location__close');
	const modalWindow = document.querySelector('.location__full-img');
	const modalImg = document.querySelector('.location__img-full');

	const isActiveClass = 'location__full-img--active';

	imagElem.forEach((elem) => {
		elem.addEventListener('click', (event) => {
			const attributeImg = event.target.getAttribute('src');
			modalImg.setAttribute('src', attributeImg);
			modalWindow.classList.add(isActiveClass);
		});
	});

	closeBtn.addEventListener('click', () => {
		modalWindow.classList.remove(isActiveClass);
	});
};

export default modalInit;
