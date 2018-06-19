var colours = ["red","rgb(200,0,0)"];
var currentColour = 0;

var WIN_SCORE = 100;
var humanScore = 0;

// countdown timer
var myTimer;

function clock() {
  myTimer = setInterval(myClock, 1000);

var c = 30;

  function myClock() {
    document.getElementById("demo").innerHTML = --c;
     if (c == 0) {
      clearInterval(myTimer);
      alert("Times Up");
    }
  }
}




init();

 // display scores on web page
function theScore() { 
  humanScore += 1;
  document.querySelector('#score').innerHTML = '<p>Your Score: ' + humanScore + '</p>';
}

function ColourChanger() {
  var button = document.getElementById("c1");
  currentColour = (currentColour+1) % colours.length;
  button.setAttribute("fill", colours[currentColour]);
  theScore();
}

function init() {
  document.getElementById("c1").addEventListener("click",ColourChanger);
}

