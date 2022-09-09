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

//was able to make the timer with the help of stack overflow
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

function render(questionIndex) {
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    for (var i = 0; i < questions.clientHeight; i++){
        var userQuestions = questions[questionIndex].question;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestions;
    }
    userQuestions.forEach(function (newItem){
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

function compare(event) {
    var element = event.target;

    if (element.matches("li")){
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        if (element.textContent == questions[questionIndex].answer){
            score++;
            createDiv.textContent = "Correct!"
        } else {
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Ooops! That's not right"
        }
    }
    questionIndex++;

    if(questionIndex >= questions.length){
        allDone();
        createDiv.textContent = "Done! " + "you got " + score + "/" + question.length;
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);
}
