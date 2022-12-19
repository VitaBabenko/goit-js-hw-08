import Player from '@vimeo/player';
// console.log(Player);

const iframe = document.querySelector('#vimeo-player');
// console.log(iframe);
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

const onTimeupdate = function (seconds) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(seconds));
    // console.log("play");
};
    
player.on('timeupdate', onTimeupdate);

player.setCurrentTime().then(function (seconds) {
    seconds = localStorage.getItem(LOCALSTORAGE_KEY);
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // error.name < 0 || error.name > duration;
            break;
        
        default:
            break;
    }
});
