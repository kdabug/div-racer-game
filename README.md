# DOM events!

### Objectives

- Add interactivity to our pages using the `addEventListener` method

## What are event listeners?


- e.target
- 

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