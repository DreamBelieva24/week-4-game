
var playerScore;
var randomNumber;
var wins = 0;
var losses = 0;

$("#message").click(reset);


function reset(){
    total = 0;
    var playerScore = 0;

    $("#score").text("");
    $("#message").html("");
    $("#wins").html(wins);
    $("#losses").html(losses);

    var randomNumber = Math.floor((Math.random() * (120 - 19 + 1)) + 19);
    $("#random").html(randomNumber);

    
    $("#a").click(clicka);
    $("#b").click(clickb);
    $("#c").click(clickc);
    $("#d").click(clickd);
    
    var a = Math.floor((Math.random() * (12 - 1 + 1)) + 1);
    var b = Math.floor((Math.random() * (12 - 1 + 1)) + 1);
    var c = Math.floor((Math.random() * (12 - 1 + 1)) + 1);
    var d = Math.floor((Math.random() * (12 - 1 + 1)) + 1);

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log("playerScore = " + playerScore);
    console.log("total = " + total);

function clicka (){
    playerScore = a;
    player();
}

function clickb (){
    playerScore = b;
    player();
}

function clickc (){
    playerScore = c;
    player();
}

function clickd (){
    playerScore = d;
    player();
}

function player(){
    
    total = total + playerScore;
    $("#score").text(total);
    console.log("player total = " + total);
    check();
}

function check(){
    if (total == randomNumber){
    wins++;
    $("#wins").html(wins);
    $("#message").html("<h2>You Win!<br><br> Click Here for New Game </h2>");
    document.getElementById("footer").innerHTML = '<audio id= "audio"  autoplay src="assets/javascript/sloth.mp3"></audio>';
    
}

    else if (total > randomNumber){
    losses++;
    $("#losses").html(losses);
    $("#message").html("<h2>You Lose!<br><br> Click Here for New Game </h2>");
    document.getElementById("footer").innerHTML = '<audio id= "audio" autoplay src="assets/javascript/traps.mp3"></audio>';
    

    
}};

}

