import VanillaTilt from 'vanilla-tilt';

const tiltInit = () => {
	const element = document.querySelector('.js-tilt');

	const params = { speed: 1000, max: 2, reverse: true };

	VanillaTilt.init(element, params);
};

export default tiltInit;
