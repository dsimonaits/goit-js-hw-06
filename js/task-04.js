let counterValue = 0;

let valueRef = document.querySelector("#value");

const buttonDecrementRef = document.querySelector(
  "button[data-action=decrement]"
);

const buttonIncrementRef = document.querySelector(
  "button[data-action=increment]"
);

const handelClick = (event) => {
  if (event.target === buttonDecrementRef) {
    counterValue -= 1;
  }

  if (event.target === buttonIncrementRef) {
    counterValue += 1;
  }

  valueRef.innerHTML = counterValue;
};

buttonDecrementRef.addEventListener("click", handelClick);

buttonIncrementRef.addEventListener("click", handelClick);
