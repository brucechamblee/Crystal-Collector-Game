# Crystal Collector Game

[Crystal Collector Game] (https://brucechamblee.github.io/Crystal-Collector-Game/)

Made the crystal collector game. In this game, you the user will be given a random number which the computer will generate. Next, the user will click on the crystals below which all have a random number nested inside of them. Each time the user clicks the crystal, the number nested inside the crystal will be added to the users count. If the user can make their number match the radomly guessed number, they win. If they exceed the randomly generated number, they lose.

Next they will click on any crystal to reset the game. A new random number will be calculated and each crystal will generate a new number. 

## HTML

The HTML in this project was very basic. I created a container which held the following:
Header Row -  image and box element to store the text.
Directions Row - contains the directions for the user.
Numbers Row - This row contained the randmon number box and the Wins/Loses Box.
Crystal Row - This row held the crystal images.
Score Row - This row contained the users clicked score.

Things to mention was that I linked Jquery in this sheet. 

## CSS
I used a reset.css file and a Bootstrap file for the grid. I next linked my own CSS Style Sheet to help match the colors of the project. Whoever did the template was quite colorful.

## JavaScript
In the Javascript, I started out by Psuedo Coding my work. This was very helpful.

Variables -  I started with creating my variables. One for wins, loses, and final score. 

Random Number - I made a variable that would hold my random generated number. I then attached a function to create this number and text it to the HTML element. 

Gem Variables - I created my crystal variables and like before, I set them to generate a number between 1 and 12.

Reset - I made a Reset Function to reset the variables and generate the new numbers when the round was finished. 

Win Function - Set it to alert the user they won, add a 1 to the wins, and the screen, and reset the game. 

Lose Function - Set it to alert the user they lost, add a 1 to the loses, and the screen, and reset the game. 

Events - Lastly, I created the onclick events which would cause the numbers to be added to the users final score and run and if/else statement for win/lose checking. 





