function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;

const btnChangeColorRef = document.querySelector(".change-color");

const colorValueRef = document.querySelector(".color");

btnChangeColorRef.addEventListener("click", () => {
  const backgroundColor = getRandomHexColor();

  body.style.backgroundColor = backgroundColor;
  colorValueRef.innerHTML = backgroundColor;
});
