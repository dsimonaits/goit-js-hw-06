const nameOutputRef = document.querySelector("#name-output");

const nameInputRef = document.querySelector("#name-input");

nameInputRef.addEventListener("input", (event) => {
  if (event.target.value === "") {
    nameOutputRef.textContent = "Anonymous";
  } else {
    nameOutputRef.textContent = event.currentTarget.value;
  }
});
