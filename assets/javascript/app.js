// setTimeout()  provides wait time
// animate

$(document).ready(function(){


var correct = 0;
var incorrect = 0;
var count = 0;
var time = setTimeout(count, 10000);
var rightAnswer =  new Audio("../assets/images/score.mp3");
var gameOverSound = new Audio("../assets/images/sterling.mp3");


var correctAnswer = "";
var incorrectAnswer = [];
var userAnswer = [];
  



var questions = [{
    question: "Yankees: First Base",
    answers: ["C.C. Sabathia", "Aaron Judge", "Greg Bird", "Sonny Gray"],
    correctAnswer: "Greg Bird",
    image: "../assets/images/birdy.gif",
    },
    {
    question: "Yankees: Second Base",
    answers: ["Brett Gardener", "Gleyber Torres", "Zack Britton", "Didi Gregorious"],
    correctAnswer: "Gleyber Torres",
    image: "../assets/images/Gleyber.gif",
    },
    {
    question: "Yankees: Closer",
    answers: ["Aroldis Chapman", "Giancarlo Stanton", "Aaron Hicks", "Chad Green"],
    correctAnswer: "Aroldis Chapman",
    image: "../assets/images/chapman.gif",
    },
    {
    question: "Yankees: Starter",
    answers: ["Miguel Andujar","Gary Sanchez","Luke Voit","Luis Severino"],
    correctAnswer: "Luis Severino",
    image: "../assets/images/Sevy.gif",
    }
    // add ss, 3b, c, lf, cf, rf, dh
];

// Start Click
$("#startGame").on("click", function (){
    // when the start button clicked, the div with the questions that was hidden is shown
            $('.gameArea').show();
            console.log('hello');
    
            $(this).hide();
        });

var number = 15;
$('#timeLeft').on('click', run);

// decrease the timer
function decrement(){
    number--;
    $('#timeLeft').html('<h2>' + number + " seconds"+'</h2>');
    if (number === 0){
    stop();
    $('#message').html('time up!');
    checkAnswers();
    }
}

function run(){
    counter = setInterval(decrement, 1000);
}

function stop(){
    clearInterval(counter);
}


run();




// //    $("#question").append("<img src=" + questions[0].image +">");
// //    $("#question").append("<img src=" + questions[1].image +">");
// //    $("#question").append("<img src=" + questions[2].image +">");
// //    $("#question").append("<img src=" + questions[3].image +">");

// //    $("#question").text(questions[0].question);
   
//    $("#choice0").text(questions[0].answers[0]);
//    $("#choice1").text(questions[0].answers[1]);
//    $("#choice2").text(questions[0].answers[2]);
//    $("#choice3").text(questions[0].answers[3]);
// //    var answer = questions[i].correctAnswer;
//    console.log(questions[0].question);
//    console.log(questions[0].answers[0]);
//    console.log(questions[0].answers[1]);
//    console.log(questions[0].answers[2]);
//    console.log(questions[0].answers[3]);
//    console.log(questions[0].correctAnswer);



});