const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.target;
  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!");
  }
  const User = { email: email.value, password: password.value };

  console.log(User);

  event.target.reset();
});
