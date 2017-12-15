// Show random number
// Click on crystal, add random amount to player's score.
// Wins if total score === random score
// Loses if total score > random score
// Game restarts
// Add to wins and losses
// Random number from 19-120
// Crystal 1-12


var randomNumber = Math.floor((Math.random() * (120 - 19 + 1)) + 19);
var playerScore = Math.floor((Math.random() * (12 - 1 + 1)) + 1);
var total = 0;
var wins = 0;
var losses = 0;

$("#wins").html(wins);
wins++
$("#losses").html(losses);
$("#random").html(randomNumber);

var totalArray = [];

function player(){
    
    totalArray.push(playerScore);
    
    for (var i = 0; i < totalArray.length; i++) {
        total += totalArray[i];
    }
    
    $("#score").text(total);
    randomNumber = parseInt(randomNumber);
    total = parseInt(total);
    check();
}

$(".gem").click(player);

function check(){
    if (total == randomNumber){
    wins++;
    $("#message").html("<h2>You Win!</h2>");
    reset();
}

    else if (total > randomNumber){
    losses++;
    $("#message").html("<h2>You Lose!</h2>");
    reset();

    
}};


function reset(){
    total = 0;
    $("#score").text("");
    
}

