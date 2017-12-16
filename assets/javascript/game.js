
var playerScore;
var randomNumber;
var wins = 0;
var losses = 0;

$("#message").click(reset);


function reset(){
    total = 0;

    $("#score").text("");
    $("#message").html("");
    $("#wins").html(wins);
    $("#losses").html(losses);

    var randomNumber = Math.floor((Math.random() * (120 - 19 + 1)) + 19);
    $("#random").html(randomNumber);

    $(".gem").click(player);
    
function player(){
    var playerScore = Math.floor((Math.random() * (12 - 1 + 1)) + 1);

        total = total + playerScore;
    
    
    $("#score").text(total);

    check();
}

function check(){
    if (total == randomNumber){
    wins++;
    $("#wins").html(wins);
    $("#message").html("<h2>You Win!<br><br> Click Here for New Game </h2>");
    $document.getElementById("footer").innerHTML = '<audio id= "audio"  autoplay src="assets/javascript/sloth.mp3"></audio>';
    
}

    else if (total > randomNumber){
    losses++;
    $("#losses").html(losses);
    $("#message").html("<h2>You Lose!<br><br> Click Here for New Game </h2>");
    document.getElementById("footer").innerHTML = '<audio id= "audio" autoplay src="assets/javascript/traps.mp3"></audio>';
    

    
}};

}

