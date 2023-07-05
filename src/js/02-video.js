import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CurrentTimeKey = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const getCurrentTime = function (currentTime) {
  localStorage.setItem(CurrentTimeKey, JSON.stringify(currentTime.seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1111));

player.setCurrentTime(JSON.parse(localStorage.getItem(CurrentTimeKey)));
