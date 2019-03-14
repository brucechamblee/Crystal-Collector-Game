$(document).ready(function() {
// create an open array for the wins with a starting number of "0"
var wins = 0
// create another empty array for the loses with only ""
var loses = 0

var total = 0

//make the system get a random number - use math.random?
var randomNum = Math.floor((Math.random() * 120) + 19);
$("#randomnum").text(randomNum);

//make a function that will add the score of each click to add to the total score.

var randomGem1 = Math.floor((Math.random() * 12) + 1);
var randomGem2 = Math.floor((Math.random() * 12) + 1);
var randomGem3 = Math.floor((Math.random() * 12) + 1);
var randomGem4 = Math.floor((Math.random() * 12) + 1);

console.log(randomGem1);
console.log(randomGem2);
console.log(randomGem3);
console.log(randomGem4);
console.log(randomNum)



    

    //make an on click function that makes each crystal pick a random number.
    $("#gem1").on("click", function(randomGem1) {
    console.log(randomGem1);
    });
    
    $("#gem2").on("click", function() {
        var randomGem2 = Math.floor((Math.random() * 12) + 1);
    });

    $("#gem3").on("click", function() {
        var randomGem3 = Math.floor((Math.random() * 12) + 1);
        });

    $("#gem4").on("click", function() {
        var randomGem4 = Math.floor((Math.random() * 12) + 1);
        });

});