// first dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceimage = "dice" + randomNumber1 + ".png";//dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceimage;

var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource);


//second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImageSource2 = "images/dice"+ randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



//header  change

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
} else{
  document.querySelector("h1").innerHTML = "🚩 Draw!";
}
