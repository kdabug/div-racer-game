console.log('main.js is connected');

// GRAB ELEMENTS
var container = document.querySelector('.container');
var banner = document.getElementById('banner');
var score = document.getElementById('score');
// GRAB START BUTTON
var startBTN = document.getElementById('start');
// GRAB PLAYERS
var p1 = document.getElementById('player1');
var p2 = document.getElementById('player2');
// START POSITION OF PLAYERS
var p1Start = p1.style.left;
var p2Start = p2.style.left;
// HOW MANY PIXELS THE DIVS MOVE EVERY KEYUP
var speed = 30;
// AS SPEED INCREMENTS PER KEYUP, THESE VARIABLES INCREMENT
// ALLOWING EACH DIV TO MOVE
var moveRedRight = 0;
var redScore = 0;
var moveBlueRight = 0;
var blueScore = 0;

// ADD EVENT LISTENER TO START BUTTON
startBTN.addEventListener('click', function (e) {
  document.addEventListener('keyup', mykeyBoard);
  banner.innerHTML = "Go go go!!!";

  // RESET POSITIONS OF PLAYERS
  p1.style.left = p1Start;
  p2.style.left = p2Start;
  moveRedRight = 0, moveBlueRight = 0;
});

function movePlayer(player) {
  if (player.id === 'player1') {
    moveRedRight += speed;
    player.style.left = moveRedRight + 'px';
  } else if (player.id === 'player2') {
    moveBlueRight += speed;
    player.style.left = moveBlueRight + 'px';
  }
}

function checkForWin(player) {
  var rightBorder = container.getBoundingClientRect().right;
  return player.getBoundingClientRect().right >= rightBorder;
}

function mykeyBoard(e) {
  if (e.keyCode === 90) {
    movePlayer(p1);
    checkForWin(p1);
    whosWinning(p1, p2);
  } else if (e.keyCode === 39) {
    movePlayer(p2);
    checkForWin(p2);
    whosWinning(p1, p2);
  } else {
    banner.innerHTML = "Wrong key dummy!"
  }
}

function printWinner(player) {
  banner.innerHTML = `${player.id} has won!`;
  document.removeEventListener('keyup', mykeyBoard);
}

function whosWinning(player1, player2) {
  var redPlayerPos = player1.getBoundingClientRect().right;
  var bluePlayerPos = player2.getBoundingClientRect().right;

  if (redPlayerPos > bluePlayerPos) {
    banner.style.color = 'red';
    banner.innerHTML = `${player1.id} is winning!`;
    if (checkForWin(player1)) { redScore++; printWinner(player1); score.innerHTML = renderScore(); }
  } else if (bluePlayerPos > redPlayerPos) {
    banner.style.color = 'blue';
    banner.innerHTML = `${player2.id} is winning!`;
    if (checkForWin(player2)) { blueScore++; printWinner(player2); score.innerHTML = renderScore(); }
  } else {
    banner.style.color = 'black';
    banner.innerHTML = `It's a close one!`;
  }
}

function renderScore() {
  return `${player1.id}: ${redScore}, ${player2.id}: ${blueScore}`;
}