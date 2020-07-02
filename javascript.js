// Identifying the start button in the html and adding a listener for clicking it
var startBtn = document.getElementById("startbtn");

startBtn.addEventListener("click", startQuiz);

// Starts the quiz
function startQuiz() {
    startBtn.classList.add("hidden");
}

