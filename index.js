
var randomNumber1 =Math.floor((Math.random()*6)+1);
var player1 = ("images/dice"+randomNumber1+".png");

var firstplayer =  document.querySelectorAll("img")[0];

firstplayer.setAttribute("src", player1);


var randomNumber2 =Math.floor((Math.random()*6)+1);
var player2 = ("images/dice"+randomNumber2+".png");

var secondplayer =  document.querySelectorAll("img")[1];

secondplayer.setAttribute("src", player2);
