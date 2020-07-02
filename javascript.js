// Identifying the start button in the html and adding a listener for clicking it
var startBtn = document.getElementById("startbtn");

startBtn.addEventListener("click", startQuiz);

// Identifying the element that holds the question and quiz explanations
var questionsElement = document.getElementById("qh2");

// Identifying the element that holds the responses and the responses by id
var answersElement = document.getElementById("responses");

var answer1 = document.getElementById("a1");
var answer2 = document.getElementById("a2");
var answer3 = document.getElementById("a3");
var answer4 = document.getElementById("a4");

// When an ansewr correct, returns the responses and questions to default
function answerCorrect() {
    answer1.classList.remove("wrong");
    answer2.classList.remove("wrong");
    answer3.classList.remove("wrong");
    answer4.classList.remove("wrong");
    
}

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

function secondQuestion() {
    questionsElement.textContent=("What is 2?");
    answer1.textContent=("Test2") 
    answer2.textContent=("Test2") 
    answer3.textContent=("Test2") 
    answer4.textContent=("Test2") 
  
}