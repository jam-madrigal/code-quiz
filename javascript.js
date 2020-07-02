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

// Adding even listeners for the answers/responses
answer1.addEventListener("click");
answer2.addEventListener("click");
answer3.addEventListener("click");
answer4.addEventListener("click");


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

}