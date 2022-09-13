const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

ingredients.map((ingredient) => {
  const ingredientMarkup = document.createElement("li");
  ingredientMarkup.textContent = ingredient;
  ingredientMarkup.classList.add("item");
  ingredientsRef.append(ingredientMarkup);
});
