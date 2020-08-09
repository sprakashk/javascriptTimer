import "./styles.css";

const timeString = document.getElementById("timeString");
const app = document.getElementById("app");

document.onload = () => {
  displayTimer();
};
app.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "startButton":
      startTimer();
      break;
    case "stopButton":
      stopTimer();
      break;
    case "resetButton":
      resetTimer();
      break;
    default:
      break;
  }
});

let isTimerOn = false;
let isTimerLive = false;
let timerCurrentValue = 0;
let timer = "";
const sound = new Audio(
  // "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg"
  // "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_hit.wav"
  "https://sounds.pond5.com/foley-plastic-hit-plastic-lite-sound-effect-066845747_prev.m4a"
);
const startTimer = (startOrStop) => {
  isTimerOn = true;
  if (!isTimerLive) {
    isTimerLive = true;
  }
  timer = setInterval(() => {
    timerCurrentValue = timerCurrentValue + 1;
    displayTimer();
  }, 1000);
};
const stopTimer = () => {
  isTimerOn = false;
  clearInterval(timer);
};
const resetTimer = () => {
  isTimerLive = false;
  timerCurrentValue = 0;
  clearInterval(timer);
  displayTimer();
};
const displayTimer = () => {
  let minValue = Math.floor(timerCurrentValue / 60);
  let hourValue = Math.floor(minValue / 60);
  timeString.innerHTML = `${hourValue} : ${minValue} : ${
    timerCurrentValue % 60
  }`;

  sound.play();
};
