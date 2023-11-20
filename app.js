const seconds = document.querySelector(".minutes");
let count = 0;
setInterval(() => {
  count++;
  if (count < 60) {seconds.innerHTML = count;}
  if (count >= 60) {count = 0; minutes.innerHTML = count;}
}, 10);
