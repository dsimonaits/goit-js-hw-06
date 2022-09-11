const fontSizeControlRef = document.querySelector("#font-size-control");

const spanTextRef = document.querySelector("#text");

spanTextRef.style.fontSize = `${fontSizeControlRef.value}px`;

fontSizeControlRef.addEventListener("input", (event) => {
  spanTextRef.style.fontSize = `${event.target.value}px`;
});
