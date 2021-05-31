let number = 0;

function inc() {
  number++
  let newNum = document.getElementById('current-number').innerText = number;
}

function dec() {
  number--
  console.log(number)
  let newNum = document.getElementById('current-number').innerText = number;
}