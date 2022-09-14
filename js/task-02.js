const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

const ingredientsMarkup = [];

ingredients.map((ingredient) => {
  const ingredientMarkup = document.createElement("li");
  ingredientMarkup.textContent = ingredient;
  ingredientMarkup.classList.add("item");
  ingredientsMarkup.push(ingredientMarkup);
});

ingredientsRef.append(...ingredientsMarkup);
