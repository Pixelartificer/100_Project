let timeLeft;
let timerIntervel;
let isRunning = false;

const timerDisplay = document.querySelector(".timer");
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");

const startTimer = (duration) => {
  let timer01 = duration;
  timerIntervel = setInterval(() => {
    const minute = parseInt(timer01 / 60, 10);
    const secound = parseInt(timer01 % 60, 10);
    const displayMin = minute < 10 ? "0" + minute : minute;
    const displaySec = secound < 10 ? "0" + secound : secound;
    timerDisplay.textContent = displayMin + ":" + displaySec;
    if (--timer01 < 0) {
      clearInterval(timerIntervel);
      timerDisplay.textContent = "Breath Out";

      setTimeout(() => {
        timerDisplay.textContent = "Breath In";
        startTimer(timeLeft);
      }, 3000);
    }
  }, 1000);
};

stopTimer = () => {
  clearInterval(timerIntervel);
  timerDisplay.textContent = "Breath In";
  isRunning = false;
};

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    timeLeft = 10;
    startTimer(timeLeft);
    isRunning = true;
  }
});

stopBtn.addEventListener("click", () => {
  stopTimer();
});
