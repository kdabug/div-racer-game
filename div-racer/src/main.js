console.log("main.js is connected");
let countOne = 1;
let countTwo = 1;

const checkWin = (oneP, twoP) => {
  let body = document.querySelector("body");
  //let winningSize = document.querySelector(".container").style.length;
  if (oneP > twoP && oneP > 30) {
    body.removeEventListener("keyup", keyPress);
    banner.innerText = "Player One Wins";
  }
  if (twoP > oneP && twoP > 30) {
    body.removeEventListener("keyup", keyPress);
    banner.innerText = "Player Two Wins";
  }
};

const keyPress = ev => {
  let playerOne = document.querySelector("#player1");
  let playerTwo = document.querySelector("#player2");
  if (ev.keyCode === 90) {
    playerOne.style.width = 128 + 30 * countOne + "px";
    console.log("player one has moved");
    countOne++;
  }
  if (ev.keyCode === 39) {
    playerTwo.style.width = 128 + 30 * countTwo + "px";
    console.log("player two has moved");
    countTwo++;
  }
  console.log(document.querySelector("#player2").style.width);
  checkWin(countOne, countTwo);
};

const clickStart = () => {
  const body = document.querySelector("body");
  const divs = document.querySelectorAll("div");
  divs.forEach(el => (el.style.position = "initial"));

  const banner = body.querySelector("#banner");
  banner.innerText = "Go Go Go!";

  body.addEventListener("keyup", keyPress);
};

const startButton = () => {
  const startBut = document.querySelector("#start");
  startBut.addEventListener("click", clickStart);
};

startButton();

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
