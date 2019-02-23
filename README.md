# quiz-app
Creating a quiz app using HTML, CSS, and Javascript from this tutorial https://www.youtube.com/watch?v=zZdQGs62cR8&amp;index=5&amp;list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx

# Objective
I've been working on a lot of backend stuff and wanted to do a project focused on front-end web design and development. I found this tutorial from [James Q Quick](https://www.youtube.com/channel/UC-T8W79DN6PBnzomelvqJYw). 

## Build a Quiz App (2) - Create and Style the Game Page
In this section we create game.html and game.css. 

## Build a Quiz App (3) - Display Hard Coded Questions
[video link](https://www.youtube.com/watch?v=zZdQGs62cR8&index=5&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx)

- Create `game.js` file 
- Create functions that load questions, identify selected answers

Need to figure out how to query each of the `.choice-text` elements, so using `data-number="X"` as noted in the pic below. 
![code snippet](https://www.dropbox.com/s/nv503d6o21p8f32/Screenshot%202019-02-21%2010.17.59.jpg?raw=1)

Then by adding `const choices = document.getElementsByClassName("choice-text");` we get an HTMLCollection like the following output to the console: 
![](https://www.dropbox.com/s/985b0pa07jt6hnc/Screenshot%202019-02-21%2013.28.19.jpg?raw=1)

We then change that to an array using `const choices = Array.from(document.getElementsByClassName("choice-text"));` and it changes the output to this: 
![](https://www.dropbox.com/s/uuv066d3rabeyta/Screenshot%202019-02-21%2013.30.30.jpg?raw=1)

#### New Things
This section uses the [JavaScript Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) to bring the `questions` array into the `availableQuestions` array like this

![](https://www.dropbox.com/s/b92c1jykn7my216/Screenshot%202019-02-21%2014.01.44.jpg?raw=1)

This also uses the [splice](https://www.w3schools.com/jsref/jsref_splice.asp) method (which I've used before, but it's been a while) which adds/removes items to/from an array. 

## Build a Quiz App (4) - Display Feedback for Correct/Incorrect Answers
[video link](https://www.youtube.com/watch?v=_LYxkClHnV0&index=6&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx)

What we did in this video: 
- Apply a class to the question element based on correct/incorrect answer selection 
- use setTimeout to display the correct/incorrect answer for 1000ms before calling getNewQuestion(); 

## Build a Quiz App (5) - Create a Head's Up Display
[video link](https://www.youtube.com/watch?v=BOQLbu_Crc0&index=7&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx)

What we did in this video: 
- Add the HTML/CSS elements to create a HUD (Question and Score)
- Create function to increment score if answer is correct. 

## Build a Quiz App (6) - Create a Progress Bar
[video link](https://www.youtube.com/watch?v=4bctmtuZVcM&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=8)

What we did in this video: 
- Removed old HTML element showing question numbers
- Added 2 <div>s, one for the outline of the progress bar, one for the progress bar itself
- The progress bar is filled in by adjusting the width of inner div using rogressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`; 

![](https://www.dropbox.com/s/gsc8giol02227wy/Screenshot%202019-02-21%2018.12.31.jpg?raw=1)

## Build a Quiz App (7) - Create and Style the End Page
[video link](https://www.youtube.com/watch?v=o3MF_JmQxYg&index=9&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx)

What we did in this video: 
- Created `end.html` and `end.js` files 
- Added CSS for forms 
- Added function to `end.js` that checks for a value in the username field to disable to the save button
- Saves player's score to local storage `localStorage.setItem("mostRecentScore", score);`

To look at local storage in Chrome, go to Application tab > Local Storage

![](https://www.dropbox.com/s/ry7n369eudga1pv/Screenshot%202019-02-21%2019.37.04.jpg?raw=1)

## Build a Quiz App (8) - Save High Scores in Local Storage
[video link](https://www.youtube.com/watch?v=DFhmNLKwwGw&index=10&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx)

What we did in this video: 
- Figure out how to sort high scores, limit scores to top 5, and write them to local storage

## Build a Quiz App (9) - Load and Display High Scores from Local Storage
[video link](https://www.youtube.com/watch?v=jfOv18lCMmw&index=11&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx)

- Creates `highscores.html`, `highscores.css`, and `highscores.js` pages
- Pulls in high scores from local storage using `const highScores = JSON.parse(localStorage.getItem('highscores')) || [];`
- Use JS [array map()](https://www.w3schools.com/jsref/jsref_map.asp) to convert the returned array from local storage to elements for an HTML list 

## Build a Quiz App (10) - Fetch API to Load Local Questions
[video link](https://www.youtube.com/watch?v=jK5zzSA2JHI&index=12&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx)

- Move hard coded questions from `game.js` to `questions.json`

Use this code pull pull questions from `questions.json` and display them in the console: 
![](https://www.dropbox.com/s/75zg5fob6c3d3am/Screenshot%202019-02-23%2009.30.56.jpg?raw=1)

When I do that, I get an HTTP response 200: 
![](https://www.dropbox.com/s/cr57ot2095bqasy/Screenshot%202019-02-23%2009.36.00.jpg?raw=1)

To make this a usble JSON response I use the following code: 
![](https://www.dropbox.com/s/rll8ti1ho7ah1xn/Screenshot%202019-02-23%2009.37.12.jpg?raw=1)

And here's what the final code looks like to pull questions from `questions.json`, which also has a .catch to handle any errors. It also moves the `startGame()` function to be called after the questions are loaded. 
![](https://www.dropbox.com/s/d8er98o06cmdq4k/Screenshot%202019-02-23%2009.45.04.jpg?raw=1)

## Build a Quiz App (11) - Fetch API to Load Questions API
[video link](https://www.youtube.com/watch?v=3aKOQn2NPFs&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=13)

Uses [Open Trivia DB API](https://opentdb.com/api_config.php) to pull questions.

Configuring questions
![configuring questions](https://www.dropbox.com/s/pb0ubtma4z49jpc/Screenshot%202019-02-23%2010.08.38.jpg?raw=1)

Side note: I installed [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa/related?hl=en) into Chrome to be able to view the returned JSON in a cleaner format. 

The format in which questions are returned from Open Trivia DB is not the format we use in our app. So we're going to use a map function to clean it up. 

This is what that section of code looks like now: 
![](https://www.dropbox.com/s/9jifsintdhvrdgp/Screenshot%202019-02-23%2010.27.30.jpg?raw=1)

## Build a Quiz App (12) - Create a Spinning Loader
[video link](https://www.youtube.com/watch?v=RQRTPi6Z7yY&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=14)

Now that we're pulling questions from an API, there is a moment when `game.html` loads that it shows the default text. This section will resolve that issue by adding a loader. 

Creates a new HTML element called `<div id="loader"></div>` in which we use a CSS animation to create a spinning circle. 
This was taken from [w3schools | CSS Loader](https://www.w3schools.com/howto/howto_css_loader.asp)

'game.js' is modififed so where the loader is removed and the game content is revealed upon the start of the game (once the questions have loaded); 

![](https://www.dropbox.com/s/flod3xq6yrpyvw2/Screenshot%202019-02-23%2017.01.47.jpg?raw=1)