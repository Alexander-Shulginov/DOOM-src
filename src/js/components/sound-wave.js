import WaveSurfer from 'wavesurfer.js';

const wv = WaveSurfer.create({
	container: '#waveform',
	waveColor: '#ffffff',
	progressColor: '#ff0b0b',
	dragToSeek: true,
	interact: true,
	cursorColor: 'rgba(0, 0, 0, 0)',
	barGap: 1.1,
	barWidth: 2,
	barHeight: 0.8,
	url: './audio/music.mp3',
});

export default wv;
