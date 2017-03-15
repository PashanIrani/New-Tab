var timeDisplay = document.getElementById('timeDisplay');

var twelveHourClock = false;

function formatTime(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

function convertToTwelveHour() {
    twelveHourClock = !twelveHourClock;
    displayTime();
}

/*
displays time, based on current setting.
*/
function displayTime() {
    var today = new Date();
    var currentHours = getCurrentHour(today, twelveHourClock);
    var currentMinutes = today.getMinutes();
    var currentSeconds = today.getSeconds();
    currentMinutes = formatTime(currentMinutes);
    currentSeconds = formatTime(currentSeconds);
    timeDisplay.innerHTML = currentHours + ':' + currentMinutes + ':' + currentSeconds;
}

/*
date is passed through the parameters,
to get the time
getTwelveHour should be set to 'true',
if you want the time in twelve hour clock format
*/
function getCurrentHour(date, getTwelveHour) {
    if (getTwelveHour) {
        return date.getHours() % 12 || 12;
    } else {
        return date.getHours();
    }
}

setInterval(displayTime, 10); //displays time the first time
