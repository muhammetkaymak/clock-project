let analogHours = document.querySelector('.Container-analog-hours');
let analogMin = document.querySelector('.Container-analog-minute');
let analogSec = document.querySelector('.Container-analog-second');

let digitalHours = document.querySelector('.Container-digital-hours>b');
let digitalMin = document.querySelector('.Container-digital-minute>b');
let digitalSec = document.querySelector('.Container-digital-second>b');

setInterval( () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // console.log(date);

    analogSec.style.transform = `rotate(${seconds*6}deg)`;
    analogMin.style.transform = `rotate(${minutes*6}deg)`;
    analogHours.style.transform = `rotate(${hours*30+(minutes/12)}deg)`;


    if (hours<10) {
        digitalHours.innerHTML = "0" + hours;
    } else {
        digitalHours.innerHTML = hours;
    }

    if (minutes<10) {
        digitalMin.innerHTML = "0" + minutes;
    } else {
        digitalMin.innerHTML = minutes;
    }

    if (seconds<10) {
        digitalSec.innerHTML = "0" + seconds;
    } else {
        digitalSec.innerHTML = seconds;
    }
});