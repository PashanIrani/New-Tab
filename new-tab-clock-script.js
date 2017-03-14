var timeDisplay = document.getElementById('timeDisplay');

function currentTime() {

    var today = new Date();
    var currentHours = today.getHours();
    var currentMinutes = today.getMinutes();
    var currentSeconds = today.getSeconds();
    currentMinutes = checkTime(currentMinutes);
    currentSeconds = checkTime(currentSeconds);
    timeDisplay.innerHTML = currentHours + ':' + currentMinutes + ':' + currentSeconds;
    var timeOut = setTimeout(currentTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}
