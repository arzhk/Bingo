const randomNumber = document.querySelector("#randomNumber");

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

function randomiseNumber() {}
