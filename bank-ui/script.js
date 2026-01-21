let balance = 1000;

function deposit() {
  let amt = Number(amount.value);
  balance += amt;
  document.getElementById("balance").innerText = balance;
}

function withdraw() {
  let amt = Number(amount.value);
  if (amt <= balance) {
    balance -= amt;
  }
  document.getElementById("balance").innerText = balance;
}
