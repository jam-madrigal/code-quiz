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
}

function scoreHide() {
    scoreElement.classList.add("hidden");
    back.classList.add("hidden");
    questionsElement.classList.remove("hidden");
    startBtn.classList.remove("hidden");
}




// How to calculate high scores **** need to edit once timer is made, placeholder textContent value for now to avoid errors

// Creating an object that will hold submissions for high scores

// ******* Dunno what to do with this yet, how to make it update and change and save sequential scores in local storage? not sure how

// var userScores = {
//     Name: userName.value.trim(),
//     Score: scoreTime.value
//   };

// What the submit button will do
function saveScore() {
    localStorage.setItem("username", userName.value);
    var ul = document.createElement("ul");
    ul.innerHTML = userName.value + " " + " " + " " + timerScore.textContent;
    scoreRecord.appendChild(ul);


}






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

// If the response is wrong, make the background of the response red
function answerWrong() {
    this.classList.add("wrong");
}

// Starts the quiz
function startQuiz() {
    startBtn.classList.add("hidden");
    questionsElement.textContent="";
    answersElement.classList.remove("hidden");

    firstQuestion();

    let timeLeft = 75;

    // A function to start the timer
    var goTime = setInterval(function() {
        timeLeft = timeLeft - 1;
        timerScore.textContent = "Time: " + timeLeft;
        // Ends the quiz if timer reaches
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
    questionsElement.textContent=("What is x?");
    answer1.textContent=("Test") 
    answer2.textContent=("Test")
    answer3.textContent=("Test") 
    answer4.textContent=("Test")
    
    // Adding event listeners for the answers/responses
    answer1.addEventListener("click", answerWrong);
    answer2.addEventListener("click", answerCorrect);
    answer3.addEventListener("click", answerWrong);
    answer4.addEventListener("click", answerWrong);

}

// Displays the second question
function secondQuestion() {
    questionsElement.textContent=("What is 2?");
    answer1.textContent=("Test2") 
    answer2.textContent=("Test2") 
    answer3.textContent=("Test2") 
    answer4.textContent=("Test2") 

    // Adding event listeners for the answers/responses
    answer1.addEventListener("click", answerWrong);
    answer2.addEventListener("click", answerWrong);
    answer3.addEventListener("click", answerCorrect2);
    answer4.addEventListener("click", answerWrong);    
  
}

function thirdQuestion() {
    questionsElement.textContent=("What is 3?");
    answer1.textContent=("Test3") 
    answer2.textContent=("Test3") 
    answer3.textContent=("Test3") 
    answer4.textContent=("Test3") 

    // Adding event listeners for the answers/responses
    answer1.addEventListener("click", answerWrong);
    answer2.addEventListener("click", answerWrong);
    answer3.addEventListener("click", answerCorrect3);
    answer4.addEventListener("click", answerWrong);    
  
}

function fourthQuestion() {
    questionsElement.textContent=("What is 4?");
    answer1.textContent=("Test4") 
    answer2.textContent=("Test4") 
    answer3.textContent=("Test4") 
    answer4.textContent=("Test4") 

    // Adding event listeners for the answers/responses
    answer1.addEventListener("click", answerCorrect4);
    answer2.addEventListener("click", answerWrong);
    answer3.addEventListener("click", answerWrong);
    answer4.addEventListener("click", answerWrong);    
  
}

function fifthQuestion() {
    questionsElement.textContent=("What is 5?");
    answer1.textContent=("Test5") 
    answer2.textContent=("Test5") 
    answer3.textContent=("Test5") 
    answer4.textContent=("Test5") 

    // Adding event listeners for the answers/responses
    answer1.addEventListener("click", answerWrong);
    answer2.addEventListener("click", answerCorrect5);
    answer3.addEventListener("click", answerWrong);
    answer4.addEventListener("click", answerWrong);    
  
}