// the elements
const cells = document.querySelectorAll('.cell');
const scoreEl = document.querySelector('#score');
const timeEl = document.querySelector('#time');
const startBtn = document.querySelector('#start');

// global variables
let score = 0;
let time = 20;
let currentPos;

// when a cell is clicked, it checks if the mole is there and updates the score if it is
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (parseInt(cell.getAttribute('data-index')) === currentPos) {
            score++;
            scoreEl.innerHTML = score;
        }
    })
});

// adding a listener to the start button
startBtn.addEventListener('click', start);

function start() {
    let startGame = setInterval(() => { // looping the game until time's up
        // emptying all cell at the start to ensure noo duplicate mole 
        cells.forEach(cell => {
            cell.innerHTML = '';
        });

        // filling a random cell by adding a div with mole class
        currentPos = Math.floor(Math.random() * 9);
        cells[currentPos].innerHTML = '<div class="mole"></div>';

        // checking if time's up
        time--;
        timeEl.innerHTML = time;
        if (time === 0) { // time's up
            clearInterval(startGame); // stop the loop
            // we use setTimeout because without it, alert executes before time updates
            setTimeout(() => {
                alert('Game Done! Refresh to restart.');
            }, 60);
        }
    }, 1000);
}