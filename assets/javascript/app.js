// setTimeout()  provides wait time
// animate

$(document).ready(function(){

// variable declaration
var intervalId;
var timer = 30;
var correct = 0;
var incorrect = 0;
var noAnswer = 0;

var startSound = new Audio("../assets/images/score.mp3");
var doneSound = new Audio("../assets/images/sterling.mp3");


// button clicks
$("#start").on('click', function() {
    startSound.play();
    $(this).hide();
    reveal();
    playGame();
})

$("#done").on('click', function() {
    doneSound.play();
    $("#start").hide();
    hide();
    results();
    end();
})

$(window).on("load", hide);

// function to create a results page
function results(){
    var finished = $("<h1>").html("THE YANKEES WIN!");
    var correctAnswers = $("<p>").html("Correct Answers: " + correct);
    var incorrectAnswers = $("<p>").html("Incorrect Answers: " + incorrect);
    var unanswered = $("<p>").html("Unanswered: " + noAnswer);
    var winPic = "<img src=assets/images/win.gif>";
    // create a div to display the results
    var summary = $('<div class="col-lg-12 text-center" id="summary">');
    // append the stats to the div
    summary.append(finished);
    summary.append(correctAnswers);
    summary.append(incorrectAnswers);
    summary.append(unanswered);
    summary.append(winPic);
    // this was confusing, took forever
    $(".row:nth(2)").append(summary);
    
} // close results function

function timerCount(){
    timer--;
    // Print to timer screen
    $("#timer").html(" " + timer + " seconds");

    if (timer === 0){
        doneSound.play();
        $("#start").hide;
        hide();
        results();
        end();
    } // end if
} // close timerCount function

//Start the coundown
function playGame() {
    intervalId = setInterval(timerCount, 1000);
}

function end() {
    clearInterval(intervalId);
}

// hide content
function hide() {
    $(".form-group").hide();
    $("#time").hide();
    $("#done").hide();
}

// show that content
function reveal() {
    $(".form-group").show();
    $("#time").show();
    $("#done").show();
}

// compute results
$("input[type=radio]").on("change", function(){
    correct = $("input[value=right]:checked").length;
    incorrect = $("input[value=wrong]:checked").length;
    noAnswer = (11 - correct - incorrect);
})

}); //close document ready