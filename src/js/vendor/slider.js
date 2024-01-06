import Swiper from './swiper';

export const swiper = new Swiper('.swiper', {
	parallax: true,
	speed: 600,
	spaceBetween: 30,
	simulateTouch: false,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
