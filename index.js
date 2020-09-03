/**
 * @class       : index
 * @author      : Chris Phibbs (chris@$HOSTNAME)
 * @created     : Thursday Sep 03, 2020 11:48:14 AEST
 * @description : index
 */

var srcPrefix = "images/dice";
var srcPostfix = ".png";

// Create random number between 1 and 6 inclusive
// for both dies, independent of each other
var numA = Math.floor(Math.random() * 6 + 1);
var numB = Math.floor(Math.random() * 6 + 1);

// Change img of each dice based on random number
document.querySelector(".diceA").setAttribute("src", (srcPrefix + numA + srcPostfix));
document.querySelector(".diceB").setAttribute("src", (srcPrefix + numB + srcPostfix));

// Changing title to match who won
if (numA > numB) {

   document.querySelector("h1").textContent = "🚩 Player 1 Wins!";

} else if (numB > numA) {

   document.querySelector("h1").textContent = "Player 2 Wins!  🚩";

} else {

   document.querySelector("h1").textContent = "Draw!";

}
