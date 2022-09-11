const validationInputRef = document.querySelector("#validation-input");

const changeClass = (event) => {
  if (
    event.target.value.length >= validationInputRef.getAttribute("data-length")
  ) {
    validationInputRef.classList.remove("invalid");
    validationInputRef.classList.add("valid");
  } else {
    validationInputRef.classList.remove("valid");
    validationInputRef.classList.add("invalid");
  }
};

validationInputRef.addEventListener("blur", changeClass);
