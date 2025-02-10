const hours = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampms = document.getElementById("ampm");

function updateClock() {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let secund = new Date().getSeconds();
  let ampm = "AM";

  if (hour > 12) {
    hour = hour - 12;
    ampm = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  secund = secund < 10 ? "0" + secund : secund;

  hours.innerText = hour;
  minutes.innerText = minute;
  seconds.innerText = secund;
  ampms.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();