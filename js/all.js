let time = new Date();
let seconds = time.getSeconds();
let minute = time.getMinutes();
let hour = time.getHours();
let showSecond;
let showMinute;
let showHour;
let status = 'AM'
const h1 = document.querySelector('h1');
const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');
showSeconds();
setInterval(showSeconds, 1000);
function showSeconds(){
  if (seconds > 59) {
    seconds = 0;
    minute++;
  }
  if (minute > 59) {
    minute = 0;
    hour++;
  }
  if (hour == 12 || hour == 24) {
    hour = 0;
  } else if (hour >= 12 && hour < 24) {
    hour = hour - 12;
    status = 'PM';
  }
  let secondDeg = 6 * seconds + 180;
  let minuteDeg = 6 * minute;
  let deg = minuteDeg / 360 * 30;
  let hourDeg = 30 * hour - 90 +deg;
  if (hour < 10) {
    showHour = `0${hour}`;
  } else {
    showHour = hour;
  }
  if (minute < 10) {
    showMinute = `0${minute}`;
  } else {
    showMinute = minute;
  }
  if (seconds < 10) {
    showSecond = `0${seconds}`;
  } else {
    showSecond = seconds;
  }
  h1.textContent = `${status}  ${showHour} : ${showMinute} : ${showSecond}`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  seconds++;
}

