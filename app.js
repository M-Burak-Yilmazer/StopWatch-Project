document.addEventListener("DOMContentLoaded", function () {
  const microSeconds = document.querySelector(".microSeconds");
  const seconds = document.querySelector(".seconds");
  const minutes = document.querySelector(".minutes");
  const hours = document.querySelector(".hours");
  const buttons = document.querySelector(".controls");
  const listContainer = document.querySelector("section ul");

  let count = 0;
  let secondsCount = 0;
  let minutesCount = 0;
  let hoursCount = 0;
  let timer = false;
  let time; // Declare time globally

  // Create an object to store the time values
  const timeData = {
    count: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
  };

  function updateTimer() {
    time = setInterval(() => {
      if (timer) {
        timeData.count++;

        if (timeData.count < 100) {
          microSeconds.innerHTML = padZero(timeData.count);
        }
        if (timeData.count >= 100) {
          timeData.count = 0;
          timeData.seconds++;
          if (timeData.seconds < 60) {
            seconds.innerHTML = padZero(timeData.seconds);
          }
          if (timeData.seconds >= 60) {
            timeData.seconds = 0;
            seconds.innerHTML = "00";
            timeData.minutes++;
            if (timeData.minutes < 60) {
              minutes.innerHTML = padZero(timeData.minutes);
            }
            if (timeData.minutes >= 60) {
              timeData.minutes = 0;
              minutes.innerHTML = "00";
              timeData.hours++;
              hours.innerHTML = padZero(timeData.hours);
            }
          }

          microSeconds.innerHTML = padZero(timeData.count);
        }
      }
    }, 10);
  }

  buttons.addEventListener("click", function (event) {
    clearInterval(time); // Clear the previous interval

    if (
      event.target.classList.contains("play") ||
      event.target.parentNode.classList.contains("play")
    ) {
      timer = true;
      updateTimer();
    }

    if (
      event.target.classList.contains("pause") ||
      event.target.parentNode.classList.contains("pause")
    ) {
      timer = false;
      // Save the current time data when pause is clicked
      count = timeData.count;
      secondsCount = timeData.seconds;
      minutesCount = timeData.minutes;
      hoursCount = timeData.hours;
      listContainer.innerHTML += `<li>${
        hoursCount < 10 ? "0" + hoursCount : hoursCount
      } : ${minutesCount < 10 ? "0" + minutesCount : minutesCount} : ${
        secondsCount < 10 ? "0" + secondsCount : secondsCount
      } : ${count < 10 ? "0" + count : count} </li> `;
    }

    if (
      event.target.classList.contains("reset") ||
      event.target.parentNode.classList.contains("reset")
    ) {
      timer = false;
      count = 0;
      secondsCount = 0;
      minutesCount = 0;
      hoursCount = 0;
      timeData.count = 0;
      timeData.seconds = 0;
      timeData.minutes = 0;
      timeData.hours = 0;

      seconds.innerHTML = "00";
      minutes.innerHTML = "00";
      hours.innerHTML = "00";
      microSeconds.innerHTML = "00";
      listContainer.innerHTML = "";
    }
  });

  // Function to pad zero as before
  function padZero(value) {
    return value < 10 ? "0" + value : String(value);
  }
});
