import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";
const lastCurrentTime = localStorage.getItem(LOCALSTORAGE_KEY);
console.log(lastCurrentTime)

const onPlay = function (data) {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
};
    
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(lastCurrentTime).catch(function(error) {
    // console.log('ERROR');
});

