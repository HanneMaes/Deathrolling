// wacht tot de DOM volledig geladen is
document.addEventListener("DOMContentLoaded", function() {

    // Start screen
    console.log('START SCREEN');
    const startBtn = document.getElementById("startBtn"); // console.log('startBtn:', startBtn);
    startBtn.addEventListener("click", startGame);        // geef de knop een click funtie

});

//***********************************************************************************************************************************

function startGame() {
    console.log('GAME STARTED');

    // play sound
    const fightBeat = new Audio('sounds/fight and dance with the devil.mp3');
    fightBeat.play();

    // hide startpage
    const startPageDiv = document.getElementById('startPage'); // console.log('startPageDiv:', startPageDiv);
    startPageDiv.classList.add('hidden');                      // hide

    // show gamepage
    const gamePageDiv = document.getElementById('gamePage'); // console.log('gamePageDiv:', gamePageDiv);
    gamePageDiv.classList.remove('hidden');                  // hide

    // init
    var round = 1;
    var currentNumber = document.getElementById("startNumber").value; // console.log('currentNumber:', currentNumber);
    const displayNumberDiv = document.getElementById("displayNumber");  // console.log('displayNumberDiv:', displayNumberDiv);
    const roundDiv = document.getElementById("round"); // console.log('rollBtn:', rollBtn);
    const rollBtn = document.getElementById("rollBtn"); // console.log('rollBtn:', rollBtn);
    
    // start game
    updatePage();
    rollBtn.addEventListener("click", roll);
    const deathBeat = new Audio('sounds/dj-airhorn.mp3');

    //***********************************

    function roll() {
        console.log('ROLL: random between 1 and ' + currentNumber);

        currentNumber = Math.floor(Math.random() * currentNumber) + 1;
        console.log('-> ' + currentNumber);

        updatePage();

        // death
        if (currentNumber == 1) { deathBeat.play(); }
    }
    
    //***********************************

    function updatePage() {
        displayNumberDiv.innerHTML = currentNumber;
        roundDiv.innerHTML = 'Round: ' + round;
    }
}