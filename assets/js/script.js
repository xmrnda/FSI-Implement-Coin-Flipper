// TODO: Declare any global variables we need
let headsRolls = 0;
let tailsRolls = 0;

 // Flip Button Click Handler
document.addEventListener('DOMContentLoaded', function () {

    // TODO: Add event listener and handler for flip and clear buttons

    //document.querySelector('#flip')
    document.getElementById('flip').addEventListener('click', () => {
        // Determine the result using Math.random(), 0 - 1
        let flippedHeads = Math.random() < 0.5;

        if (flippedHeads) {
            // Display the image and change message
            document.getElementById('penny-image').src = "assets/images/penny-heads.jpg";
            document.getElementById('message').textContent = "You Flipped Heads!";

            // Increment the headsRolls counter
            headsRolls++;
        }

        else {
             // Display the image and change message
            document.getElementById('penny-image').src = "assets/images/penny-tails.jpg";
            document.getElementById('message').textContent = "You Flipped Tails!";
            
             // Increment the headsRolls counter
            tailsRolls++;
        }
        
        updateScoreboard();

    });

    // Clear Button Click Handler

    document.getElementById('clear').addEventListener('click', () => {

        // TODO: Reset global variables to 0

        headsRolls = 0;
        tailsRolls = 0;
        document.getElementById('message').textContent = 'Let\'s Get Rolling!';

        // TODO: Update the scoreboard (same logic as in flip button click handler)

       updateScoreboard(); 

    });

});

function updateScoreboard() {
        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips

        let totalRolls = headsRolls + tailsRolls;

        // Make variables to track the percentages of heads and tails

        let percentHeads = 0; 
        let percentTails = 0;

        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)

        if (totalRolls > 0) {
            percentHeads = Math.round((headsRolls / totalRolls) * 100);
            percentTails = Math.round((tailsRolls / totalRolls) * 100);
        }

        // TODO: Update the display of each table cell

        document.getElementById('heads').textContent = headsRolls;
        document.getElementById('heads-percent').textContent = percentHeads + '%';
        document.getElementById('tails').textContent = tailsRolls;
        document.getElementById('tails-percent').textContent = percentTails + '%';

}