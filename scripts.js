var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTimer");
var questions = document.querySelector("#questions");
var wrapper = document.querySelector("#wrapper");
var score = 0;
var questionIndex = 0;
var secondsLeft = 75;
var penalty = 5;
var holdInt = 0;
var ulCreate = document.createElement("ul");

var questions = [
    {
    question: "What is the symbol for a ID in CSS?",
    choices: [
        "A. Question Mark (?)",
        "B. Period (.)",
        "C. Exclamation Point",
        "D. Pound (#)",
    ],
    answer: "D. Pound (#)",
 },
 {
    question: "What tool can be used to debug and and print content in the debugger?",
    choices: [
        "A. For/if Loops",
        "B. Github",
        "C. Console.log",
        "D. HTML",
    ],
    answer: "C. Console Log",
 },
 {
    question: "Which of the following can be stored in arrays?",
    choices: [
        "A. Numbers",
        "B. Strings",
        "C. Other Arrays",
        "D. All of the Above",
    ],
    answer: "D. All of the Above",
 },
 {
    question: "Commonly used data types DO NOT include:",
    choices: [
        "A. Strings",
        "B. Alerts",
        "C. Booleans",
        "D. All of the above are included",
    ],
    answer: "B. Alerts",
 },
 {
    question: "An if statement is enclosed within?",
    choices: [
        "A. ()",
        "B. []",
        "C. {}",
        "D. <>",
    ],
    answer: "A. ()",
 },
];

timer.addEventListener("click", function(){
    if (holdInt === 0){
        holdInt = setInt(function (){
            secondsLeft--;
            currentTime.textContent = "Time Left: " + secondsLeft;

            if (secondsLeft <=0) {
                clearInterval(holdInt);
                allDone();
                currentTime.textContent = "Your time is up!"
            }
        }, 1000);
    }
    return questionIndex();
});
