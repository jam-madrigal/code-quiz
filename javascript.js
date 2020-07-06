// Identifying the start button in the html and adding a listener for clicking it
var startBtn = document.getElementById("startbtn");

startBtn.addEventListener("click", startQuiz);

// Identifying the element that holds the timer, whose number value will be saved for scores
var timerScore = document.getElementById("timer");

// Identifying the element that holds the question and quiz explanations
var questionsElement = document.getElementById("qh2");

// Identifying the element that holds the responses and the responses by id
var answersElement = document.getElementById("responses");

// Identifying the high score form/button element, back button element, name submission element, and submit button element
var scoreForm = document.getElementById("highscore");

var scoreElement = document.getElementById("scores");

var scoreBtn = document.getElementById("scoreBtn");
    scoreBtn.addEventListener("click", scoreShow);

var back = document.getElementById("backBtn");
    back.addEventListener("click", scoreHide);

var userName = document.getElementById("userName");

var submit = document.getElementById("submitBtn");
    submit.addEventListener("click", saveScore);

// Element to create list of scores
var scoreRecord = document.getElementById("makeUL");

// When the high score button is clicked, hide everything but the list of high scores, back button undoes this
function scoreShow() {
    questionsElement.classList.add("hidden");
    answersElement.classList.add("hidden");
    startBtn.classList.add("hidden");
    scoreElement.classList.remove("hidden");
    scoreElement.classList.add("scoreList");
    back.classList.remove("hidden");
    renderScores();

}

function scoreHide() {
    scoreElement.classList.add("hidden");
    back.classList.add("hidden");
    questionsElement.classList.remove("hidden");
    startBtn.classList.remove("hidden");
}


// What the submit button will do, including saving scores to an object in local storage
function saveScore() {

    event.preventDefault();

    var temp = JSON.parse((localStorage.getItem("userData"))) || [];

    var userData = {
        Name: userName.value,
        Score: timerScore.textContent
    }

    temp.push(userData);
    localStorage.setItem("userData", JSON.stringify(temp));

    location.reload();

}

function renderScores() {
   
    // Render an unordered list from the local storage array of scores
    var scoresToRender = JSON.parse((localStorage.getItem("userData")));

    // Append an unordered list for each score entry to the hidden high scores element
    for (var i = 0; i < scoresToRender.length; i++) {
    // scoresToRender.sort(); later, make this sort the by highest time remaining
    var ul = document.createElement("ul");
    ul.textContent = scoresToRender[i].Name + ":" + " " + scoresToRender[i].Score;
    scoreRecord.prepend(ul);
    }
}

// A function here will have to pull the stored scores from the saveScore function and render them into an unordered list each time the page is reloaded


// Idenitfying each answer element
var answer1 = document.getElementById("a1");
var answer2 = document.getElementById("a2");
var answer3 = document.getElementById("a3");
var answer4 = document.getElementById("a4");

// A variable for a boolean that determines if the quiz is over or not, for calling back to stop the timer on more than one condition
var quizDone;


// When an answer is correct for a given question, returns the responses and questions to default and proceeds to the next question
function answerCorrect() {
    answer1.classList.remove("wrong");
    answer2.classList.remove("wrong");
    answer3.classList.remove("wrong");
    answer4.classList.remove("wrong");

    let i = true; 

    if (i === true) {
        secondQuestion();
    }
}

function answerCorrect2() {
    answer1.classList.remove("wrong");
    answer2.classList.remove("wrong");
        answer2.removeEventListener("click", answerCorrect)
    answer3.classList.remove("wrong");
    answer4.classList.remove("wrong");

    let i = true; 

    if (i === true) {
        thirdQuestion();
    }
}

function answerCorrect3() {
    answer1.classList.remove("wrong");
    answer2.classList.remove("wrong");
    answer3.classList.remove("wrong");
        answer3.removeEventListener("click", answerCorrect2)
    answer4.classList.remove("wrong");

    let i = true; 

    if (i === true) {
        fourthQuestion();
    }
}

function answerCorrect4() {
    answer1.classList.remove("wrong");
    answer2.classList.remove("wrong");
    answer3.classList.remove("wrong");
        answer3.removeEventListener("click", answerCorrect3)
    answer4.classList.remove("wrong");

    let i = true; 

    if (i === true) {
        fifthQuestion();
    }
}

function answerCorrect5() {
    quizDone = true;

    answer1.classList.remove("wrong");
        answer1.removeEventListener("click", answerCorrect4)
    answer2.classList.remove("wrong");
    answer3.classList.remove("wrong");
    answer4.classList.remove("wrong");

    let i = true; 

    // Hide the responses, change the question to Congratulations! Enter your name for high scores.
    if (i === true) {
        questionsElement.textContent=("Congratulations! Enter your name or initials for high scores.");
        answersElement.classList.add("hidden");
        scoreForm.classList.remove("hidden");
    }
}

// If the response is wrong, make the background of the response red and decrease the timer by 5 seconds

let timeLeft = 75;

function answerWrong() {
    this.classList.add("wrong");
    timeLeft = timeLeft - 5;
}

// Starts the quiz
function startQuiz() {
    startBtn.classList.add("hidden");
    questionsElement.textContent="";
    answersElement.classList.remove("hidden");

    firstQuestion();


    // A function to start the timer
    var goTime = setInterval(function() {
        timeLeft = timeLeft - 1;
        timerScore.textContent = "Time: " + timeLeft;
        // Ends the quiz if timer reaches 0
        if (timeLeft <= 0) {
            answerCorrect5();
            clearInterval(goTime);
        }

        if (quizDone === true) {
            clearInterval(goTime);
        }

    },
    1000);
    

}


// Displays the first question
function firstQuestion() {
    questionsElement.textContent=("Which html tag is required to enable javascript code?");
    answer1.textContent=("<div>") 
    answer2.textContent=("<script>")
    answer3.textContent=("<head>") 
    answer4.textContent=("<javascript>")
    
    // Adding event listeners for the answers/responses
    answer1.addEventListener("click", answerWrong);
    answer2.addEventListener("click", answerCorrect);
    answer3.addEventListener("click", answerWrong);
    answer4.addEventListener("click", answerWrong);

}

// Displays the second question
function secondQuestion() {
    questionsElement.textContent=("Complete the sentence in a way that best fits our quotes from class: \"Javascript can be used to traverse the ___?");
    answer1.textContent=("Sea") 
    answer2.textContent=("Source") 
    answer3.textContent=("DOM") 
    answer4.textContent=("Client") 

    // Adding event listeners for the answers/responses, removing old listeners to avoid function errors
    answer1.removeEventListener("click", answerWrong);
    answer2.removeEventListener("click", answerCorrect);
    answer3.removeEventListener("click", answerWrong);
    answer4.removeEventListener("click", answerWrong);

    answer1.addEventListener("click", answerWrong);
    answer2.addEventListener("click", answerWrong);
    answer3.addEventListener("click", answerCorrect2);
    answer4.addEventListener("click", answerWrong);    
  
}

function thirdQuestion() {
    questionsElement.textContent=("Select the example with proper syntax for creating a new variable in JavaScript.");
    answer1.textContent=("var i:0,") 
    answer2.textContent=("for i = 0;") 
    answer3.textContent=("var i = 0;") 
    answer4.textContent=("function (i) =") 

    // Adding event listeners for the answers/responses
    answer1.removeEventListener("click", answerWrong);
    answer2.removeEventListener("click", answerWrong);
    answer3.removeEventListener("click", answerCorrect2);
    answer4.removeEventListener("click", answerWrong); 

    answer1.addEventListener("click", answerWrong);
    answer2.addEventListener("click", answerWrong);
    answer3.addEventListener("click", answerCorrect3);
    answer4.addEventListener("click", answerWrong);    
  
}

function fourthQuestion() {
    questionsElement.textContent=("Which of the following would properly function to identify an HTML element by Id?");
    answer1.textContent=("document.getElementById");
    answer2.textContent=("document.getElementByClass");
    answer3.textContent=("document.getelementByiD");
    answer4.textContent=("document.querySelector");

    // Adding event listeners for the answers/responses
    answer1.removeEventListener("click", answerWrong);
    answer2.removeEventListener("click", answerWrong);
    answer3.removeEventListener("click", answerCorrect3);
    answer4.removeEventListener("click", answerWrong);

    answer1.addEventListener("click", answerCorrect4);
    answer2.addEventListener("click", answerWrong);
    answer3.addEventListener("click", answerWrong);
    answer4.addEventListener("click", answerWrong);    
  
}

function fifthQuestion() {
    questionsElement.textContent=("Which of the following will provide the user with a box in which to type?");
    answer1.textContent=("alert(\"Hello)");
    answer2.textContent=("prompt(\"What is your name?)");
    answer3.textContent=(".addEventListener(\"KeyboardEvent)"); 
    answer4.textContent=(".textContent=(\"Type here)");

    // Adding event listeners for the answers/responses
    answer1.removeEventListener("click", answerCorrect4);
    answer2.removeEventListener("click", answerWrong);
    answer3.removeEventListener("click", answerWrong);
    answer4.removeEventListener("click", answerWrong);

    answer1.addEventListener("click", answerWrong);
    answer2.addEventListener("click", answerCorrect5);
    answer3.addEventListener("click", answerWrong);
    answer4.addEventListener("click", answerWrong);    
  
}