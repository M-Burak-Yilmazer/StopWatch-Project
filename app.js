const microSeconds = document.querySelector(".microSeconds");
let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let hours = document.querySelector(".hours");
const buttons = document.querySelector(".controls");

let count = 0;
let secondsCount = 0;
let minutesCount = 0;
let hoursCount = 0;
let timer = false;
let time; // Declare time globally

function padZero(value) {
  return value < 10 ? "0" + value : String(value);
}

function padZeroMilliseconds(value) {
  if (value < 10) {
    return "00" + value;
  } else if (value < 100) {
    return "0" + value;
  } else {
    return String(value);
  }
}

function updateTimer() {
  time = setInterval(() => {
    if (timer) {
      count++;

      if (count < 100) {
        microSeconds.innerHTML = padZero(count);
      }
      if (count >= 100) {
        count = 0;
        secondsCount++;
        if (secondsCount < 60) {
          seconds.innerHTML = padZero(secondsCount);
        }
        if (secondsCount >= 60) {
          secondsCount = 0;
          seconds.innerHTML = "00";
          minutesCount++;
          if (minutesCount < 60) {
            minutes.innerHTML = padZero(minutesCount);
          }
          if (minutesCount >= 60) {
            minutesCount = 0;
            minutes.innerHTML = "00";
            hoursCount++;
            hours.innerHTML = padZero(hoursCount);
          }
        }

        microSeconds.innerHTML = padZero(count);
      }
    }
  }, 10);
}

buttons.addEventListener("click", function (event) {
  clearInterval(time); // Clear the previous interval

  if (event.target.classList.contains("play")) {
    timer = true;
    updateTimer();
  }

  if (event.target.classList.contains("pause")) {
    timer = false;
  }

  if (event.target.classList.contains("reset")) {
    timer = false;
    count = 0;
    secondsCount = 0;
    minutesCount = 0;
    hoursCount = 0;
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    hours.innerHTML = "00";
    microSeconds.innerHTML = "00";
  }
});
