var rundomNumber1 = Math.floor(Math.random() * 6) + 1;
var rundomNumber2 = Math.floor(Math.random() * 6) + 1;
var rundomDiceNumber = "dice" + rundomNumber1 + ".png";
var rundomDiceNumber2 = "dice" + rundomNumber2 + ".png";
var rundomImageSource = "images/" + rundomDiceNumber;
var rundomImageSource2 = "images/" + rundomDiceNumber2;
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
image1.setAttribute("src", rundomImageSource);
image2.setAttribute("src", rundomImageSource2);

var rundomText = document.querySelector("h1");
if (rundomNumber1 > rundomNumber2){
  rundomText.innerHTML = "🚩Player 1 wins!";
} else if (rundomNumber1 < rundomNumber2) {
  rundomText.innerHTML = "Player 2 wins!🚩";
  rundomText.classList.add("little-h1")
} else {
  rundomText.innerHTML = "Draw!";
}
