const daysElement = document.getElementById('days');
const hrsElement = document.getElementById('hours');
const minsElement = document.getElementById('minutes');
const secElement = document.getElementById('seconds');


const newYear = '1 Jan 2022';

const countdown = () => {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = days;
    hrsElement.innerHTML = hours;
    minsElement.innerHTML = minutes;
    secElement.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);