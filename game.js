const question = document.getElementById("question"); 
const choices = Array.from(document.getElementsByClassName("choice-text")); 
const progressText = document.getElementById('progressText'); 
// const questionCounterText = document.getElementById('questionCounter'); 
const scoreText = document.getElementById('score'); 
const loader = document.getElementById('loader'); 
const game = document.getElementById('game'); 
let currentQuestion = {}; 
let acceptingAnswers = true; 
let score = 0; 
let questionCounter = 0; 
let availableQuestions = []; 

// empty array to hold quesitons fetched from questions.json 
let questions = []; 

// pulls questions from questions.json
fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
    .then(res => {
    console.log(res); 
    return res.json(); 
})
.then(loadedQuestions => {
    console.log(loadedQuestions.results); 

    questions = loadedQuestions.results.map( loadedQuestion => {
        const formattedQuestion = {
            question: loadedQuestion.question
        }; 

        const answerChoices = [... loadedQuestion.incorrect_answers]; 
        formattedQuestion.answer = Math.floor(Math.random() * 3) + 1; 
        answerChoices.splice(formattedQuestion.answer -1, 0, 
        loadedQuestion.correct_answer); 

        answerChoices.forEach((choice, index) => {
            formattedQuestion["choice" + (index+1)] = choice; 
        })

        return formattedQuestion; 
    }); 
    
    // questions = loadedQuestions; 
    startGame(); 
}).catch( err => {
    console.error(err); 
}); 

// CONSTANTS
const CORRECT_BONUS = 10; 
const MAX_QUESTIONS = 3; 

startGame = () => {
    questionCounter = 0; 
    score = 0; 
    availableQuestions = [ ...questions]; 
    getNewQuestion(); 
    game.classList.remove('hidden'); 
    game.classList.add('hidden'); 
}; 

getNewQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score); 
        // go to end page 
        return window.location.assign("/end.html"); 
    }

    questionCounter++; // increments question counter
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    // update the progress bar 
    console.log( (questionCounter / MAX_QUESTIONS) * 100); 
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`; 

    const questionIndex = Math.floor(Math.random() * availableQuestions.length); 
    currentQuestion = availableQuestions[questionIndex]; 
    question.innerText = currentQuestion.question; 

    choices.forEach(choice => {
        const number = choice.dataset["number"]; 
        choice.innerText = currentQuestion["choice" + number]; 
    }); 

    // removes question once asked
    availableQuestions.splice(questionIndex, 1); 

    acceptingAnswers = true; 
}; 

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return; 

        acceptingAnswers = false; 

        const selectedChoice = e.target; 
        const selectedAnswer = selectedChoice.dataset['number']; 
       
        // const classToApply = 'incorrect'; 
        // if (selectedAnswer == currentQuestion.answer) {
        //     classToApply = 'correct'; 
        // }

        // ternary syntax of previous logic statement
        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'; 

        selectedChoice.parentElement.classList.add(classToApply); 
        
        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS); 
        }

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply); 
            getNewQuestion();          
        }, 1000); 

    });
});

incrementScore = num => {
    score +=num; 
    scoreText.innerText = score; 
}; 

