const amount = document.getElementById("amount");
const guest = document.getElementById("guest");
const quality = document.getElementById("quality");
const tipAmount = document.getElementById("tipAmount");

calculate = () => {
  const tip = ((amount.value * quality.value) / guest.value).toFixed(2);
  amount.value = "";
  guest.value = "";
  quality.value = "";
  if (tip === "NaN") {
    tipAmount.innerHTML = "tips ৳0 each";
    shwoTipAmount();
  } else {
    tipAmount.innerHTML = "tip ৳ " + tip + " each";
    shwoTipAmount();
  }
};

shwoTipAmount = () => {
  var x = tipAmount;
  x.className = "Show";
  setTimeout(() => {
    x.className = x.className.replace("Show", "");
  }, 3000);
};
