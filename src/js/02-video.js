import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const TIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(setPlay, 1000));
    
function setPlay({ seconds }) {
    localStorage.setItem(TIME_KEY, seconds);
}

player.setCurrentTime(+localStorage.getItem(TIME_KEY))