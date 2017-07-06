# DOM events!

### Objectives

- Add interactivity to our pages using the `addEventListener` method


## Handling Events

- There are many events you may want to respond to with JS including clicks, mouseovers, focuses, etc.
- Events can be listened for and responded to using `addEventListener`.

```javascript
document
.getElementById("my-div")
.addEventListener("click", function() {
	alert("Click worked!");
});
```

You can also write this with arrow functions, like so:

```js
document
.getElementById("my-div")
.addEventListener("click", () => {
	alert("Click worked!");
});
```

- If you need to handle an event that occurs on many elements you will need to attach event listeners to each element individually.
- This can be done by binding the event to a class. Let's take this example:

#### index.html

```html
<div class="my-div"></div>
<div class="my-div"></div>
<div class="my-div"></div>
```

#### app.js

```javascript
const myElements = document.querySelectorAll(".my-div");

for (let i = 0; i < myElements.length; i++) {
	myElements[i].addEventListener("click", () => {
		alert("Click worked!");
	});
}
```

- Sometimes you need access to the event itself -- for example, if you want to know what element is being clicked on or you want to know what key is being pressed. You can do this by passing the event into the callback function, like so:

```javascript
const myElement = document.querySelector('#my-div');

function plusOne(event) {
  event.target.innerHTML = parseInt(event.target.innerHTML) + 1;
}

myElement.addEventListener('click', (event) => plusOne(event));
```

## Common pitfalls

- Immediately invoking the event

```js
function plusNumber(num, e) {
  e.target.innerHTML = parseInt(e.target.innerHTML) + num;
}

const myElement = document.querySelector('#sample-element');
// BAD, plusNumber is called as soon as the page loads
myElement.addEventListener('click', plusNumber(3, e));
// GOOD
myElement.addEventListener('click', function(e) {
  plusNumber(3, e);
})
```