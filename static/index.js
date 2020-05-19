// ------------------------------------Generating random value 1 -------------------------------------------------------------------------------------------


var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage = 'images/dice' + randomNumber1 + '.png';

var Image1 = document.querySelectorAll('img')[0];

Image1.setAttribute("src", randomDiceImage);


// ------------------------------------Generating random value 2 -------------------------------------------------------------------------------------------


var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage = 'images/dice' + randomNumber2 + '.png';

var Image2 = document.querySelectorAll('img')[1];

Image2.setAttribute("src", randomDiceImage);


// ------------------------------------Generating wins -------------------------------------------------------------------------------------------


if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = "🚩 Player 1 Wins";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector('h1').innerHTML = "🚩 Player 2 Wins";
}
else if (randomNumber1 === randomNumber2) {
  document.querySelector('h1').innerHTML = "It's a Draw!."
}
