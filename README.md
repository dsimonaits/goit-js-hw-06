# goit-js-hw-06

Module 6 - DOM

---

<h2>Task 1</h2>
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

1. Will count and display in the console the number of categories in ul#categories, that is, li.item elements.
2. For each li.item element in the ul#categories list, will find and display in the console the element header text (&#60;h2&#62; tag) and the number of elements in the category (all nested &#60;li&#62;).
3. As a result, the following messages will be displayed in the console:

Number of categories: 3<br>
<br>
Category: Animals<br>
Elements: 4<br>
<br>
Category: Products<br>
Elements: 3<br>
<br>
Category: Technologies<br>
Elements: 5<br>

---

<h2>Task 2</h2>
In HTML, there is an empty ul#ingredients list.

&#60;ul id="ingredients"></ul&#62;

In JavaScript, there is an array of strings.

const ingredients = [<br>
"Potatoes",<br>
"Mushrooms",<br>
"Garlic",<br>
"Tomatos",<br>
"Herbs",<br>
"Condiments",<br>
];
<br>
Write a script that, for each element in the ingredients array:

1. Will create a separate &#60;li&#62; element. Be sure to use the document.createElement() method.
2. Will add the ingredient name as its text content.
3. Will add the item class to the element.
4. Then will insert all &#60;li&#62; to the ul#ingredients list in a single operation.

---

<h2>Task 3</h2>
1. Write a script to create a gallery of images from an array of data. There is a list, ul.gallery, in HTML.<br>

&#60;ul class="gallery"></ul&#62;<br>

2. Use an array of objects images to create &#60;img&#62; elements nested in &#60;li&#62;. Use template strings and the insertAdjacentHTML() method to create markup.<br>

3. All gallery items must be added to DOM in one insert operation.
4. Add at least some gallery design with flexboxes or grids using CSS classes.

const images = [<br>
{<br>
url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",<br>
alt: "White and Black Long Fur Cat",<br>
},<br>
{<br>
url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",<br>
alt: "Orange and White Koi Fish Near Yellow Koi Fish",<br>
},<br>
{<br>
url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",<br>
alt: "Group of Horses Running",<br>
},<br>
];<br>

---

<h2>Task 4</h2>
The counter consists of a span and buttons, which, when clicked, should increase and decrease its value by one.

&#60;div id="counter"><br>
&#60;button type="button" data-action="decrement">-1</button><br>
&#60;span id="value">0</span><br>
&#60;button type="button" data-action="increment">+1</button><br>
</div&#62;<br>

1. Create a variable, counterValue, that will store the current counter value and initialize it with 0.
2. Add listeners for clicks on the buttons; inside them, increase or decrease the value of the counter.
3. Update the interface with the new value of the variable counterValue.

---

<h2>Task 5</h2>
Write a script that, when typing in the input#name-input input (input event), substitutes its current value into span#name-output. If the input is empty, the span should display the "Anonymous" string.<br>

&#60;input type="text" id="name-input" placeholder="Please enter your name" /&#62;<br>
&#60;h1>Hello, <span id="name-output">Anonymous</span>!</h1&#62;<br>

---

<h2>Task 6</h2>
Write a script that, when focus on input is lost (blur event), checks its contents for the correct number of entered characters.

&#60;input<br>
type="text"<br>
id="validation-input"<br>
data-length="6"<br>
placeholder="Please enter 6 symbols"<br>
/&#62;

1. The number of characters in the input is specified in its data-length attribute.
2. If the number of characters entered is correct, the input's border turns green, or red with a wrong number.
3. To add styles, use the valid and invalid CSS classes, which you can find in the task source files.

#validation-input {<br>
border: 3px solid #bdbdbd;<br>
}<br>
<br>
#validation-input.valid {<br>
border-color: #4caf50;<br>
}<br>
<br>
#validation-input.invalid {<br>
border-color: #f44336;<br>
}<br>

---

<h2>Task 7</h2>
Write a script that responds to changes in the value of input#font-size-control (input event) and changes the inline style of span#text by updating the font-size property. As a result, the text size will change responding to scrollbar dragging.<br>

&#60;input id="font-size-control" type="range" min="16" max="96" /><br>
&#60;br /><br>
&#60;span id="text">Abracadabra!</span><br>

---

<h2>Task 8</h2>
Write a script to manage the login form.<br>

&#60;form class="login-form"><br>
<label><br>
Email<br>
<input type="email" name="email" /><br>
</label><br>
<label><br>
Password<br>
<input type="password" name="password" /><br>
</label><br>
<button type="submit">Login</button><br>

</form><br>

1. Form submission (form.login-form) must be processed on the submit event.
2. The page must not reload when the form is submitted.
3. If the form has empty fields, display alert saying that all fields must be filled in.
4. As soon as the user has filled in all the fields and submitted the form, collect the field values into an object, where the field name will be the property name and the field value will be the property value. Use the elements property to access form elements.
5. Display the object with the entered data in the console and clear the values of the form fields using the reset method.

---

<h2>Task 9</h2>
Write a script that changes the background colors of the <body> element via inline style when clicking on button.change-color and outputs the color value to span.color.<br>

&#60;div class="widget"><br>

&#60;p>Background color: <span class="color">-</span></p&#62;<br>
&#60;button type="button" class="change-color">Change color</button&#62;<br>
&#60;/div&#62;<br>

Use the getRandomHexColor function to generate a random color.<br>

function getRandomHexColor() {<br>
return `#${Math.floor(Math.random() * 16777215) .toString(16) .padStart(6, 0)}`;<br>
}<br>

---

<h2>Task 10 (optional)</h2>
Write a script to create and clear a collection of elements. The user enters the number of elements into input and clicks the New button, after which a collection is rendered. When you click on the Clear button, the collection is cleared.<br>
<br>
&#60;div id="controls"><br>
<input type="number" min="1" max="100" step="1" /><br>
<button type="button" data-create>Create</button><br>
<button type="button" data-destroy>Destroy</button><br>

</div><br>

&#60;div id="boxes"></div>

Create a createBoxes(amount) function that takes one parameter, a number. The function creates as many &#60;div> as specified in amount and adds them to div#boxes.<br>

1. The dimensions of the very first &#60;div> are 30px by 30px.
2. Each element after the first one should be 10px wider and higher than the previous one.
3. All elements must have a random HEX background color. Use the ready-made getRandomHexColor function to get a color.
   function getRandomHexColor() {<br>
   return `#${Math.floor(Math.random() * 16777215) .toString(16) .padStart(6, 0)}`;<br>
   }<br>
   <br>
   Create a destroyBoxes() function that clears the contents of div#boxes, thereby removing all created elements.<br>
