let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
const houri = document.getElementById('hour')
const minutei = document.getElementById('minute')
const secondi = document.getElementById('second')
const millisecondi = document.getElementById('millisecond')
const srcold = document.getElementById("multiaudio4").src
const music4 = document.getElementById("multiaudio4")
let cron;
let played = false;
document.getElementById("start").addEventListener("click", start);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("reset").addEventListener("click", reset);
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
  music4.src = "()";
  played = false
  // millisecondi.innerText = '000';
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
  // millisecondi.innerText = returnData(millisecond);
  let Finalvalue =  String(document.getElementById("lname").value).split(':')
  console.log(Finalvalue)
  if(returnData(hour) == Finalvalue[0] && returnData(minute) == Finalvalue[1] && returnData(second) == Finalvalue[2] && played == false){
    console.log("1 minute has passed")
    music4.src = srcold;
    music4.play();
    played = true;
  }
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`
}