console.log("main.js is connected");

const keyPress = ev => {
  if (ev.keyCode === 90) {
    playerOne = document.querySelector("#player1");
    playerOne.style.position += 30;
    console.log("player one has moved");
  }
  if (ev.keyCode === 39) {
    playerTwo = document.querySelector("#player2");
    playerTwo.style.position += 30;
  }
  //checkWin();
};
// const checkWin = () => {
//     if ()
// }

const clickStart = () => {
  const body = document.querySelector("body");
  const divs = document.querySelectorAll("div");
  divs.forEach(el => (el.style.position = "initial"));

  const banner = body.querySelector("#banner");
  banner.innerText = "Go Go Go!";

  window.addEventListener("keyup", keyPress);
};

const startButton = document.querySelector("#start");
startButton.addEventListener("click", clickStart);

/*
DIV RACER!!!
When the page loads
- Grab the start button from the DOM
- Add a click event to the start button
When the start button is clicked
- Grab all the elements from the DOM
- Set the initial position of the divs
- Set the banner to say "Go go go!!!"
- Add an event listener to the page that listens for all keyup events
When a key is pressed
- Check to see if it's a Z (90) or a right arrow (39) (one way to do this is use e.keyCode)
- Add 30 to the corresponding div's position
- Check for a win condition
- If the win condition is met
  - Display the winner in the banner
  - Remove the event listener on the page
*/
