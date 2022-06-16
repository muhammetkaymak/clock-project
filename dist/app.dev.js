"use strict";

var analogHours = document.querySelector('.Container-analog-hours');
var analogMin = document.querySelector('.Container-analog-minute');
var analogSec = document.querySelector('.Container-analog-second');
var digitalHours = document.querySelector('.Container-digital-hours>b');
var digitalMin = document.querySelector('.Container-digital-minute>b');
var digitalSec = document.querySelector('.Container-digital-second>b');
setInterval(function () {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds(); // console.log(date);

  analogSec.style.transform = "rotate(".concat(seconds * 6, "deg)");
  analogMin.style.transform = "rotate(".concat(minutes * 6, "deg)");
  analogHours.style.transform = "rotate(".concat(hours * 30 + minutes / 12, "deg)");

  if (hours < 10) {
    digitalHours.innerHTML = "0" + hours;
  } else {
    digitalHours.innerHTML = hours;
  }

  if (minutes < 10) {
    digitalMin.innerHTML = "0" + minutes;
  } else {
    digitalMin.innerHTML = minutes;
  }

  if (seconds < 10) {
    digitalSec.innerHTML = "0" + seconds;
  } else {
    digitalSec.innerHTML = seconds;
  }
});