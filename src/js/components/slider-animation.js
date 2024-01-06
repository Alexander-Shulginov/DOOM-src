const sliderAnimInit = () => {
	const btnNext = document.querySelector('.swiper-button-next');
	const btnPrev = document.querySelector('.swiper-button-prev');

	btnNext.addEventListener('click', () => {
		const currentSlide = document.querySelector('.swiper-slide-visible');
		const previousSlide = document.querySelector('.swiper-slide-prev');
		const currentName = currentSlide.querySelector('.bestiary__name');
		const oldName = previousSlide.querySelector('.bestiary__name');
		currentName.classList.add('bestiary__name--animation');
		oldName.classList.remove('bestiary__name--animation');
	});

	btnPrev.addEventListener('click', () => {
		const currentSlide = document.querySelector('.swiper-slide-visible');
		const nextSlide = document.querySelector('.swiper-slide-next');
		const currentName = currentSlide.querySelector('.bestiary__name');
		const oldName = nextSlide.querySelector('.bestiary__name');
		currentName.classList.add('bestiary__name--animation');
		oldName.classList.remove('bestiary__name--animation');
	});
};

export default sliderAnimInit;
