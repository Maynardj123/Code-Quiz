var firstPage = document.querySelector(".firstPage")
var titleWords = document.querySelector(".mainName");
var titlepar = document.querySelector(".mainParagraph");
var startButton = document.querySelector(".startButton");


var otherPages = document.querySelector(".otherPages")
var question = document.querySelector(".question");
var choice1 = document.querySelector("#btn1");
var choice2 = document.querySelector("#btn2");
var choice3 = document.querySelector("#btn3");
var choice4 = document.querySelector("#btn4");

var index = 0
var inputAnswer = document.querySelectorAll(".choice")

var timerElement = document.querySelector(".timerCount");
var timer;
var timerCounter;


var questions =[
    {
        question:'Commonly used data types DO NOT include.',
        choices:['1. strings','2. booleans','3. alerts','4. numbers'],
        answer:'3. alerts',
    },
    {
        question:'The condition in an if / else statement is enclosed with____',
        choices:['1. quotes','2. curly brackets','3. parenthesis','4. square brackets'],
        answer:'3. parenthesis',
    },
    {
        question:'Arrays in Javascript can be used to store____',
        choices:['1. numbers and strings','2. other arrays','3. booleans','4. all of the above'],
        answer:'4. all of the above',
    },
    {
        question:'String values must be enclosed within___ when being assigned to variables.',
        choices:['1. commas','2. curly brackets','3. quotes','4. parenthesis'],
        answer:'3. quotes'
    },
    {
        question:'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices:['1. javascript','2. terminal/bash','3. for loops','4. console.log'],
        answer:'4. console.log'
    }

]

startButton.addEventListener('click', startQuiz)



function startQuiz() {
    function unhide() {
        question.style.removeProperty('display')
        choice1.style.removeProperty('display')
        choice2.style.removeProperty('display')
        choice3.style.removeProperty('display')
        choice4.style.removeProperty('display')
    }
    
    function hide() {
        titleWords.style.display='none';
        titlepar.style.display='none';
        startButton.style.display='none';
    }

    hide();
    unhide();
    // timerCounter= 75;
    // startTimer();
    displayQuestion()
}

function checkAnswer() {
    var clickedContent = this.textContent
    if (clickedContent == questions[index].answer) {
        
    } else {
        
    }
    index ++ 
    displayQuestion()
}
function displayQuestion() {
    
    question.textContent = questions[index].question
    choice1.textContent = questions[index].choices[0]
    choice2.textContent = questions[index].choices[1]
    choice3.textContent = questions[index].choices[2]
    choice4.textContent = questions[index].choices[3]
    inputAnswer.forEach(answer => {
        console.log(answer)
        answer.onclick = checkAnswer
    })
}



// function init() {
//     getCorrect();
//     getWrong();
// }



// function startTimer() {
//     timer = setInterval(function() {
//         timerCounter--;
//         timerElement.textContent = timerCounter;
//         if (timerCounter >= 0) {
            
//         }
//     })
// }

// setTimeout(() => {
//     document.querySelector('form button').removeAttribute('display-none');
//   }, 8000);