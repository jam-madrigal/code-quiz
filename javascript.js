// Identifying the start button in the html and adding a listener for clicking it
var startBtn = document.getElementById("startbtn");

startBtn.addEventListener("click", startQuiz);

// Identifying the element that holes the question and quiz explanations
var questionsElement = document.getElementById("qh2");

// Identifying the element that holds the responses
var answersElement = document.getElementById("responses");

// Functions
// Starts the quiz
function startQuiz() {
    startBtn.classList.add("hidden");
    questionsElement.textContent="";

    firstQuestion();
}

// Displays the first question
function firstQuestion() {
    questionsElement.textContent="What is x?"
}