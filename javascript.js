// Identifying the start button in the html and adding a listener for clicking it
var startBtn = document.getElementById("startbtn");

startBtn.addEventListener("click", startQuiz);

// Identifying the element that holds the question and quiz explanations
var questionsElement = document.getElementById("qh2");

// Identifying the element that holds the responses and the responses by id
var answersElement = document.getElementById("responses");

// Identifying the high score form element, name submission element, and submit button element
var scoreElement = document.getElementById("highscore");
var userName = document.getElementById("userName");
var submit = document.getElementById("submitBtn");
    submit.addEventListener("click", saveScore;

// What the submit button will do



// Idenitfying each answer element
var answer1 = document.getElementById("a1");
var answer2 = document.getElementById("a2");
var answer3 = document.getElementById("a3");
var answer4 = document.getElementById("a4");

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
        scoreElement.classList.remove("hidden");

    }
}

// If the response is wrong, make the background of the response red

function answerWrong() {
    this.classList.add("wrong");
}

// Functions
// Starts the quiz
function startQuiz() {
    startBtn.classList.add("hidden");
    questionsElement.textContent="";
    answersElement.classList.remove("hidden");

    firstQuestion();
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