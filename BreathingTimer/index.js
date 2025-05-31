const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
let timeLeft;
let interval;

const setTimer = (duration) => {
  interval = setInterval(() => {
    let minits = Math.floor(Number(duration / 60));
    let seconds = Number(duration % 60);
    minits = minits < 10 ? "0" + minits : minits;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timer.innerText = minits + ":" + seconds;
    timeLeft--;
    if (timeLeft < 0) {
      timer.innerText = "Breath out";
      setTimeout(() => {
        timer.innerText = "Breath in";
      }, 3000);

      clearInterval(interval);
    }
    duration = timeLeft;
  }, 1000);
};
startBtn.addEventListener("click", () => {
  timeLeft = 90;
  setTimer(timeLeft);
});

stopBtn.addEventListener("click", () => {
  timeLeft = 90;
  clearInterval(interval);
  timer.innerText = "01:30";
});
