let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
const houri = document.getElementById('hour')
const minutei = document.getElementById('minute')
const secondi = document.getElementById('second')
const millisecondi = document.getElementById('millisecond')
let srcold = document.getElementById("multiaudio4").src
let cron;
let played = false;

function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  houri.innerText = '00';
  minutei.innerText = '00';
  secondi.innerText = '00';
  millisecondi.innerText = '000';
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  houri.innerText = returnData(hour);
  minutei.innerText = returnData(minute);
  secondi.innerText = returnData(second);
  millisecondi.innerText = returnData(millisecond);
  if(hour == 1 && played == false){
    console.log("1 minute has passed")
    document.getElementById('multiaudio4').src = "./cheater.mp3";
    document.getElementById('multiaudio4').play();
    played = true;
  }else if(!hour == 1){
    console.log("NOT A MINUTE")
    document.getElementById("multiaudio4").src = "/nothing"
  }
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`
}

