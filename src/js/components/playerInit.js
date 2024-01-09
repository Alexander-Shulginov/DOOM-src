import WaveSurfer from 'wavesurfer.js';

export default function playerInit() {
	const track = document.querySelector('.player__track');
	const playList = document.querySelectorAll('.player__song');
	const currentSong = document.querySelector('.player__current');

	const playBtn = document.querySelector('.player__btn--play');
	const pauseBtn = document.querySelector('.player__btn--pause');
	const nextBtn = document.querySelector('.player__btn--next');
	const prevBtn = document.querySelector('.player__btn--prev');
	const repeatBtn = document.querySelector('.player__btn--repeat');
	const repeatActiveBtn = document.querySelector('.player__btn--repeat-active');
	const shuffleBtn = document.querySelector('.player__btn--shuffle');
	const timePlay = document.querySelector('.player__time--duration');
	const currentTimePlay = document.querySelector('.player__time--current');

	const cssMarkSongCss = 'player__song--current';
	const cssBtnIsHidden = 'player__btn--hidden';
	const cssBtnIsVisible = 'player__btn--visible';

	let btnIsHidden = true;
	let repeatIsActive = false;
	let indexCurrentSong = 0;
	let newUrl;

	const wvv = WaveSurfer.create({
		container: '#playerwave',
		waveColor: '#ffffff',
		progressColor: '#ff0b0b',
		dragToSeek: true,
		interact: true,
		cursorColor: 'rgba(0, 0, 0, 0)',
		barGap: 3.0,
		barWidth: 1,
		barHeight: 0.5,
		height: 25,
		url: './audio/01. Hell On Earth.mp3',
	});

	function showBtn() {
		playBtn.classList.add(cssBtnIsHidden);
		pauseBtn.classList.add(cssBtnIsVisible);
	}

	function hideBtn() {
		playBtn.classList.remove(cssBtnIsHidden);
		pauseBtn.classList.remove(cssBtnIsVisible);
	}

	function toggleBtnVisibility() {
		btnIsHidden = !btnIsHidden;

		if (btnIsHidden) {
			showBtn();
		} else {
			hideBtn();
		}
	}

	function toggleRepeatBtn() {
		repeatIsActive = !repeatIsActive;
		if (repeatIsActive) {
			repeatActiveBtn.classList.add(cssBtnIsVisible);
			repeatBtn.classList.add(cssBtnIsHidden);
		} else {
			repeatActiveBtn.classList.remove(cssBtnIsVisible);
			repeatBtn.classList.remove(cssBtnIsHidden);
		}
	}

	function setUrl(song) {
		return newUrl = `./audio/${song.textContent}.mp3`;
	}

	function playNewSong(song) {
		track.setAttribute('src', `./audio/${song.textContent}.mp3`);
	}

	function updateCurrentSong(song) {
		const text = song.textContent;
		const sliceText = text.slice(3);
		currentSong.textContent = sliceText;
	}

	function markCurrentSong(song) {
		song.classList.add(cssMarkSongCss);
	}

	function clearMarkSong() {
		playList.forEach((song) => {
			song.classList.remove(cssMarkSongCss);
		});
	}

	function updateIndexSong(index) {
		indexCurrentSong = index + 1;
	}

	function playAudio() {
		// track.play();
		wvv.play();
		toggleBtnVisibility();
	}

	function pauseAudio() {
		// track.pause();
		wvv.pause();
		toggleBtnVisibility();
	}

	function repeatSong() {
		toggleRepeatBtn();
		if (repeatIsActive) {
			track.setAttribute('loop', '');
		} else {
			track.removeAttribute('loop');
		}
	}

	function deleteRepeatSong() {
		track.removeAttribute('loop');
	}

	function toggleSongHandler(song) {
		clearMarkSong();
		deleteRepeatSong();
		markCurrentSong(song);
		playNewSong((song));
		// setUrl(song);
		updateCurrentSong(song);
		// track.play();
		wvv.load(setUrl(song));
		// wvv.play();
		showBtn();
	}

	function nextAudio() {
		if (indexCurrentSong < playList.length - 1) {
			indexCurrentSong += 1;
			toggleSongHandler(playList[indexCurrentSong]);
		}
	}

	function prevAudio() {
		if (indexCurrentSong > 0) {
			indexCurrentSong -= 1;
			toggleSongHandler(playList[indexCurrentSong]);
		}
	}

	function shuffleSongs() {
		const randomNumber = Math.floor(Math.random() * playList.length);
		indexCurrentSong = randomNumber;
		toggleSongHandler(playList[randomNumber]);
	}

	function formatTime(seconds) {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = Math.floor(seconds % 60);

		const formattedMinutes = String(minutes).padStart(2, '0');
		const formattedSeconds = String(remainingSeconds).padStart(2, '0');

		return `${formattedMinutes}:${formattedSeconds}`;
	}

	playList.forEach((song, index) => {
		song.addEventListener('click', () => {
			updateIndexSong(index - 1);
			toggleSongHandler(song);
		});
	});

	playBtn.addEventListener('click', () => playAudio());
	pauseBtn.addEventListener('click', () => pauseAudio());
	nextBtn.addEventListener('click', () => nextAudio());
	prevBtn.addEventListener('click', () => prevAudio());
	repeatBtn.addEventListener('click', () => repeatSong());
	repeatActiveBtn.addEventListener('click', () => repeatSong());
	shuffleBtn.addEventListener('click', () => shuffleSongs());

	track.addEventListener('ended', () => nextAudio());

	track.addEventListener('timeupdate', () => {
		const { currentTime } = track;
		currentTimePlay.textContent = formatTime(currentTime);
	});

	track.addEventListener('canplay', () => {
		const { duration } = track;
		timePlay.textContent = formatTime(duration);
	});
}
