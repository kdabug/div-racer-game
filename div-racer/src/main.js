console.log("main.js is connected");

let countOne = 1;
let countTwo = 1;
let playerOneScore = 0;
let playerTwoScore = 0;
const playerOne = document.querySelector("#player1");
const playerTwo = document.querySelector("#player2");
const body = document.querySelector("body");
playerOne.init = 128;
playerTwo.init = 128;
playerOne.count = 0;
playerTwo.count = 0;
// const endGame = () => {
//   alert("Congratulations");
//   document.location.reload();
// };
const updateScore = player => {
  let scoreText = document.querySelector("#score");
  if (player === "playerOne") {
    playerOneScore++;
  }
  if (player === "playerTwo") {
    playerTwoScore++;
  }
  scoreText.innerText = `Player One score: ${playerOneScore}. \n Player Two score: ${playerTwoScore}.`;
};

const checkWin = (oneP, twoP) => {
  if (
    oneP > twoP &&
    oneP > 30 //parseInt(playerOne.style.width) > parseInt(container.style.width)
  ) {
    body.removeEventListener("keyup", keyPress);
    banner.innerText = "Player One Wins";
    updateScore("playerOne");
    //endGame();
  }
  if (
    twoP > oneP &&
    twoP > 30
    //parseInt(playerTwo.style.width) > parseInt(container.style.width)
  ) {
    body.removeEventListener("keyup", keyPress);
    banner.innerText = "Player Two Wins";
    updateScore("playerTwo");
    //endGame();
  }
};

const movePlayer = player => {
  player.style.width = player.init + 30 * player.count + "px";
  player.count++;
};

const keyPress = ev => {
  if (ev.keyCode === 90) {
    movePlayer(playerOne);
  }
  if (ev.keyCode === 39) {
    movePlayer(playerTwo);
  }
  checkWin(playerOne.count, playerTwo.count);
};

const clickStart = () => {
  const divs = document.querySelectorAll("div");
  divs.forEach(el => {
    el.style.width = "initial";
    playerOne.count = 0;
    playerTwo.count = 0;
  });
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
