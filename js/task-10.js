function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let amount = 0;
let size = 20;

const controlsRef = document.querySelector("#controls");
const createBtnRef = document.querySelector("button[data-create]");
const destroyBtnRef = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("#boxes");

boxesRef.style.display = "flex";
boxesRef.style.flexWrap = "wrap";
boxesRef.style.flexDirection = "column-reverse";

function boxGetBigger(amount) {
  for (let i = 0; i < amount; i++) {
    size += 10;
    return size;
  }
}

controlsRef.addEventListener("input", (event) => {
  amount = event.target.value;
});

createBtnRef.addEventListener("click", createBoxes());

destroyBtnRef.addEventListener("click", () => {
  destroyBoxes();
  size = 20;
});

createBtnRef.addEventListener("click", () => {
  createBoxes(amount);
});

function createBoxes(amount) {
  if (amount >= 1) {
    for (let i = 0; i < amount; i++) {
      boxesRef.insertAdjacentHTML("afterbegin", "<div class=box></div>");
      const boxRef = document.querySelector(".box");
      boxRef.style.width = `${boxGetBigger(amount)}px`;
      boxRef.style.height = boxRef.style.width;
      boxRef.style.margin = "5px";
      boxRef.style.backgroundColor = getRandomHexColor();
    }
  }
}

function destroyBoxes() {
  return (boxesRef.innerHTML = "");
}
