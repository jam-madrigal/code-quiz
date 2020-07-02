# Code Quiz: The Process
---

The idea is to create a timed quiz application that asks questions about javascript. The application should display a question with multiple choice responses. When the user clicks a response, there will be feedback. A correct response will display the next question, and an incorrect response will subtract from the time remaining. At the end, a score is generated based on the remaining time and locally stored on a list of high scores, which the user can choose to view.

---

## Getting Started

1. The user should be greeted with a page that describes the application (a quiz, along with how it works with the timer and score system)
2. There will be a button to start the quiz 
3. On clicking the button, the original text and header will hide itself via css giving way to a quiz question and four multiple choice responses
- A timer will also begin at this time and start counting down
- If at any point the timer reaches 0 the quiz will end and skip to step 6 and 7 of this readme
4. The user can hover over the responses and see a background color change to make it clear which answer they have selected
5. When the user clicks a response, there will be two outcomes
- On an incorrect response, the border of the response will be red and 5 seconds will be subtracted from the timer
- On a correct response, the current question and responses will become hidden and a new set will be displayed
6. After the questions finish, the user will be shown their score
- This score is generated based on the seconds remaining, and will be equivalent to the total time remaining, therefore making a higher score superior
7. The user will be asked to enter their name (or initials for og video game cred) 
- A submit button will be listed below this entry box
8. On submission, the user's score and name are stored locally
