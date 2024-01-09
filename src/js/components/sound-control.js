import wv from './sound-wave';

const soundControl = () => {
	// const soundTrack = document.querySelector('.doom__track');
	const soundBtn = document.querySelector('.doom__volume');
	const playIcon = document.querySelector('.doom__volume-icon--off');
	const muteIcon = document.querySelector('.doom__volume-icon--on');
	const cssActiv = 'isActive';

	let isPlayed = false;

	soundBtn.addEventListener('click', () => {
		playIcon.classList.toggle(cssActiv);
		muteIcon.classList.toggle(cssActiv);
		if (!isPlayed) {
			// soundTrack.play();
			wv.play();
			isPlayed = !isPlayed;
		} else {
			// soundTrack.pause();
			wv.pause();
			isPlayed = !isPlayed;
		}
	});
};

export default soundControl;
