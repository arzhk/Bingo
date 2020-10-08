window.onload = function () {
  for (let i = 1; i <= 76; i++) {
    const board = document.querySelector("#board");
    const numberCell = document.createElement("div");
    numberCell.className = "numberCell";

    const numberContent = document.createElement("h3");
    numberContent.innerText = i;

    numberCell.appendChild(numberContent);
    board.appendChild(numberCell);
  }
};

function randomiseNumber() {
  let randomNumber = Math.round(Math.random() * 76);
  let numberArray = document.querySelectorAll(".numberCell");
  let red = document.querySelectorAll(".red");
  if (numberArray[randomNumber - 1].classList.contains("red")) {
    console.log("duplicate number detected");
    while (numberArray[randomNumber - 1].classList.contains("red")) {
      console.log(randomNumber);
      randomNumber = Math.round(Math.random() * 76);
      console.log("Rerolled to: " + randomNumber);
    }
  }
  const numberHolder = document.querySelector("#randomNumber h2");
  numberHolder.innerText = randomNumber;
  numberArray[parseInt(randomNumber) - 1].classList.add("red");
}

function clearBoard() {
  let redArray = document.querySelectorAll(".red");
  for (let i = 0; i < redArray.length; i++) {
    redArray[i].classList.remove("red");
  }
}
