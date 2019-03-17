$(document).ready(function() {
// create an open array for the wins with a starting number of "0"
var wins = 0
// create another empty array for the loses with only ""
var loses = 0
// create a variable to hold the total crystal count.
let finalScore = 0;

//make the system get a random number - use math.random?
var randomNum = Math.floor((Math.random() * (120 - 19 + 1)) + 19);
$("#randomnum").text(randomNum);

//make a function that will add the score of each click to add to the total score.

var randomGem1 = Math.floor((Math.random() * 12) + 1);
var randomGem2 = Math.floor((Math.random() * 12) + 1);
var randomGem3 = Math.floor((Math.random() * 12) + 1);
var randomGem4 = Math.floor((Math.random() * 12) + 1);



// game reset
function reset(){
    randomNum = Math.floor((Math.random() * (120 - 19 + 1)) + 19);
    $("#randomnum").text(randomNum);
    randomGem1 = Math.floor((Math.random() * 12) + 1);
    randomGem2 = Math.floor((Math.random() * 12) + 1);
    randomGem3 = Math.floor((Math.random() * 12) + 1);
    randomGem4 = Math.floor((Math.random() * 12) + 1);
    finalScore = 0
    $('#totalscorenumber').text(finalScore);
    }

    // function to add wins
    function win(){
        alert("you won");
        wins++;
        $('#wins').text(wins);
        reset();
    }

    function lose(){
        alert ("you lose");
        loses++;
        $('#loses').text(loses);
        reset();
    }

    

    //make an on click function that makes each crystal pick a random number.
    $("#gem1").on("click", function() {
        finalScore += randomGem1;
        console.log(finalScore);
        console.log(randomGem1);
        $("#totalscorenumber").text(finalScore);
            if (finalScore === randomNum){
                win();
            }
            else if ( finalScore > randomNum){
                lose();
            }
    });
    
    $("#gem2").on("click", function() {
        finalScore += randomGem2;
        console.log(finalScore);
        console.log(randomGem2);
        $("#totalscorenumber").text(finalScore);
            if (finalScore === randomNum){
                win();
            }
            else if ( finalScore > randomNum){
                lose();
            }
    });

    $("#gem3").on("click", function() {
        finalScore += randomGem3;
        console.log(finalScore);
        console.log(randomGem3);
        $("#totalscorenumber").text(finalScore);
            if (finalScore === randomNum){
                win();
            }
            else if ( finalScore > randomNum){
                lose();
            }
        });

    $("#gem4").on("click", function() {
        finalScore += randomGem4;
        console.log(finalScore);
        console.log(randomGem4);
        $("#totalscorenumber").text(finalScore);
            if (finalScore === randomNum){
                win();
            }
            else if ( finalScore > randomNum){
                lose();
            }
        });

});