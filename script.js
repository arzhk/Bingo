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
  let randomNumber = Math.floor(Math.random() * 76);
  let numberArray = document.querySelectorAll(".numberCell");
  let red = document.querySelectorAll(".red");

  while (numberArray[parseInt(randomNumber)].className === "red") {
    let randomNumber = Math.floor(Math.random() * 76);
    console.log("number was duplicate");
  }
  const numberHolder = document.querySelector("#randomNumber h2");
  numberHolder.innerText = randomNumber;
  numberArray[parseInt(randomNumber) - 1].classList.add("red");
}
