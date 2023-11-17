// Iteration 8: Making scoreboard functional
var score=localStorage.getItem("totalscore")
var scoreboard=document.getElementById("score-board");
scoreboard.innerHTML=score;
var playagainbutton=document.getElementById("play-again-button");
playagainbutton.onclick=()=>{
    console.log("check")
    location.href="./game.html";
};