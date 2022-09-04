const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

const markup = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

ingredientsRef.insertAdjacentHTML("afterbegin", markup);

console.log(ingredientsRef);
