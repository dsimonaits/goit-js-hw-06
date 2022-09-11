const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

const ingredient1 = document.createElement("li");
ingredient1.textContent = ingredients[0];
ingredient1.classList.add("item");

// console.log(ingredient1);

const ingredient2 = document.createElement("li");
ingredient2.textContent = ingredients[1];
ingredient2.classList.add("item");

// console.log(ingredient2);

const ingredient3 = document.createElement("li");
ingredient3.textContent = ingredients[2];
ingredient3.classList.add("item");

// console.log(ingredient3);

const ingredient4 = document.createElement("li");
ingredient4.textContent = ingredients[3];
ingredient4.classList.add("item");

// console.log(ingredient4);

const ingredient5 = document.createElement("li");
ingredient5.textContent = ingredients[4];
ingredient5.classList.add("item");

// console.log(ingredient5);

const ingredient6 = document.createElement("li");
ingredient6.textContent = ingredients[5];
ingredient6.classList.add("item");

// console.log(ingredient6);

ingredientsRef.append(
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
  ingredient5,
  ingredient6
);
