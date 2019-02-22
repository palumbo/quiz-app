const username = document.getElementById('username'); 
const saveScoreButton = document.getElementById("saveScoreBtn"); 
const finalScore = document.getElementById('finalScore'); 
const mostRecentScore = localStorage.getItem('mostRecentScore'); 

const highScores = JSON.parse(localStorage.getItem('highScores')) || []; 

const MAX_HIGH_SCORES = 5; 

console.log(highScores); 


finalScore.innerText = mostRecentScore; 

username.addEventListener('keyup', () => {
    // console.log(username.value); 
    saveScoreBtn.disabled = !username.value; 
}); 

saveHighScore = e => {
    console.log("clicked the save button"); 
    e.preventDefault(); 

    const score = {
        // score: Math.floor(Math.random() * 100), // used for testing 
        score: mostRecentScore, 
        name: username.value 
    }; 
    // console.log(score); 

    highScores.push(score); // adds score to highScore array
    highScores.sort( (a,b) => b.score - a.score); // sorts scores from highest to lowest 
    highScores.splice(MAX_HIGH_SCORES); // only keeps top 5 scores 

    localStorage.setItem('highscores', JSON.stringify(highScores)); 
    window.location.assign('/index.html'); 
}; 