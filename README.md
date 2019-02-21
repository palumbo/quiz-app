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
