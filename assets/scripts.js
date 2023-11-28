//This section is to identify all variables so I can use it throughout my javascript//
    //Learned more about how to call upon selectors from CSS and use them in JS//
var headline = document.querySelector('.headline');
var mainpage = document.querySelector('.main-page');
var startpoint = document.querySelector('.start-point');
var quiz = document.querySelector('.quiz');
var test = document.querySelector('.test');
var results = document.querySelector('.results');
var initials = document.getElementById('Initials');
var Highscores = document.querySelector('.Highscores');
var Userscores = document.querySelector('.UserScore');
//Used getElement code to refer to Id created in HTML//
var Timer = document.getElementById('Timer');
var Start = document.getElementById('Start');
//This section is to have an eventlistner to add functionaility to the Start button//
Start.addEventListener('click', function() {
//Used this code to set the starting point back to hidden and have the quiz appear//
startpoint.style.display = "none";
test.style.display = "block";
});

//Code to have the View Highscores button take you to the Highscore page//

//Code to set up the timer//

//Code to have start button start the timer as well//


//Code to have the Test section show a question with four clickable asnwer choices//

//Code to have incorrect answer choices decrease time by ?10 seconds?//

//Code to have the Test section change questions and answer choices//

//Code to have Results screen appear either by completing quiz or time runs out//

//Code to add functionality to the results page such as inputting initials and logging it//

//Code to have Timer show time of completion//

//Code to have Highscore page appear after submitting initials and showing your Score logged in UserScore section//


