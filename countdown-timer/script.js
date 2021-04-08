const daysElement = document.getElementById('days');
const hrsElement = document.getElementById('hours');
const minsElement = document.getElementById('minutes');
const secElement = document.getElementById('seconds');


const newYear = '01 Jan 2022';

const countdown = () => {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = formatDays(days);
    hrsElement.innerHTML = formatTime(hours);
    minsElement.innerHTML = formatTime(minutes);
    secElement.innerHTML = formatTime(seconds);
}

const formatTime = (time) => {
    return time < 10 ? (`0${time}`) : time;
}

const formatDays = (days) => {
    // switch (days) {
    //     case (days < 10):
    //         console.log('hello')
    //         return (`00${days}`);
    //     case (days < 100):
    //         return (`0${days}`);
    //     case (days >= 100):
    //         return days;
    // }
    if (days < 10) {
        return (`00${days}`);
    } else if (days < 100) {
        return (`0${days}`);
    } else {
        return days;
    }
}

countdown();

setInterval(countdown, 1000);