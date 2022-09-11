# goit-js-hw-06

Module 6 - DOM

---

Task 1
In HTML, there is a list of categories, ul#categories.

<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>

Write a script that:

Will count and display in the console the number of categories in ul#categories, that is, li.item elements.
For each li.item element in the ul#categories list, will find and display in the console the element header text (&#60;h2&#62; tag) and the number of elements in the category (all nested &#60;li&#62;).
As a result, the following messages will be displayed in the console.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5

---

Task 2
In HTML, there is an empty ul#ingredients list.

&#60;ul id="ingredients"></ul&#62;

In JavaScript, there is an array of strings.

const ingredients = [
"Potatoes",
"Mushrooms",
"Garlic",
"Tomatos",
"Herbs",
"Condiments",
];

Write a script that, for each element in the ingredients array:

Will create a separate &#60;li&#62; element. Be sure to use the document.createElement() method.
Will add the ingredient name as its text content.
Will add the item class to the element.
Then will insert all &#60;li&#62; to the ul#ingredients list in a single operation.

---

Task 3
Write a script to create a gallery of images from an array of data. There is a list, ul.gallery, in HTML.

&#60;ul class="gallery"></ul&#62;

Use an array of objects images to create &#60;img&#62; elements nested in &#60;li&#62;. Use template strings and the insertAdjacentHTML() method to create markup.

All gallery items must be added to DOM in one insert operation.
Add at least some gallery design with flexboxes or grids using CSS classes.

const images = [
{
url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
alt: "White and Black Long Fur Cat",
},
{
url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
alt: "Orange and White Koi Fish Near Yellow Koi Fish",
},
{
url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
alt: "Group of Horses Running",
},
];

---

Task 4
The counter consists of a span and buttons, which, when clicked, should increase and decrease its value by one.

&#60;div id="counter">
&#60;button type="button" data-action="decrement">-1</button>
&#60;span id="value">0</span>
&#60;button type="button" data-action="increment">+1</button>
</div&#62;

Create a variable, counterValue, that will store the current counter value and initialize it with 0.
Add listeners for clicks on the buttons; inside them, increase or decrease the value of the counter.
Update the interface with the new value of the variable counterValue.

---

Task 5
Write a script that, when typing in the input#name-input input (input event), substitutes its current value into span#name-output. If the input is empty, the span should display the "Anonymous" string.

&#60;input type="text" id="name-input" placeholder="Please enter your name" /&#62;
&#60;h1>Hello, <span id="name-output">Anonymous</span>!</h1&#62;

---

Task 6
Write a script that, when focus on input is lost (blur event), checks its contents for the correct number of entered characters.

&#60;input
type="text"
id="validation-input"
data-length="6"
placeholder="Please enter 6 symbols"
/&#62;

The number of characters in the input is specified in its data-length attribute.
If the number of characters entered is correct, the input's border turns green, or red with a wrong number.
To add styles, use the valid and invalid CSS classes, which you can find in the task source files.

#validation-input {
border: 3px solid #bdbdbd;
}

#validation-input.valid {
border-color: #4caf50;
}

#validation-input.invalid {
border-color: #f44336;
}

---

Task 7
Write a script that responds to changes in the value of input#font-size-control (input event) and changes the inline style of span#text by updating the font-size property. As a result, the text size will change responding to scrollbar dragging.

&#60;input id="font-size-control" type="range" min="16" max="96" />
&#60;br />
&#60;span id="text">Abracadabra!</span>

---

Task 8
Write a script to manage the login form.

&#60;form class="login-form">
<label>
Email
<input type="email" name="email" />
</label>
<label>
Password
<input type="password" name="password" />
</label>
<button type="submit">Login</button>

</form>

Form submission (form.login-form) must be processed on the submit event.
The page must not reload when the form is submitted.
If the form has empty fields, display alert saying that all fields must be filled in.
As soon as the user has filled in all the fields and submitted the form, collect the field values into an object, where the field name will be the property name and the field value will be the property value. Use the elements property to access form elements.
Display the object with the entered data in the console and clear the values of the form fields using the reset method.

---

Task 9
Write a script that changes the background colors of the <body> element via inline style when clicking on button.change-color and outputs the color value to span.color.

&#60;div class="widget">

  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Use the getRandomHexColor function to generate a random color.

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215) .toString(16) .padStart(6, 0)}`;
}

---

Task 10 (optional)
Write a script to create and clear a collection of elements. The user enters the number of elements into input and clicks the New button, after which a collection is rendered. When you click on the Clear button, the collection is cleared.

&#60;div id="controls">
<input type="number" min="1" max="100" step="1" />
<button type="button" data-create>Create</button>
<button type="button" data-destroy>Destroy</button>

</div>

&#60;div id="boxes"></div>

Create a createBoxes(amount) function that takes one parameter, a number. The function creates as many &#60;div> as specified in amount and adds them to div#boxes.

The dimensions of the very first &#60;div> are 30px by 30px.
Each element after the first one should be 10px wider and higher than the previous one.
All elements must have a random HEX background color. Use the ready-made getRandomHexColor function to get a color.
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215) .toString(16) .padStart(6, 0)}`;
}

Create a destroyBoxes() function that clears the contents of div#boxes, thereby removing all created elements.
