const DEFAULT_SIZE = 16;

const grid = document.getElementById('grid');

const singleColourBtn = document.getElementById('single-colour');
singleColourBtn.addEventListener('click', setActivePenMode)

const clearGridBtn = document.getElementById('clear-grid');
clearGridBtn.addEventListener('click', clearGrid);

const resizeGridBtn = document.getElementById('grid-size');
resizeGridBtn.addEventListener('click', resizeGrid);

const eraserBtn = document.getElementById('eraser');
eraserBtn.addEventListener('click', setActivePenMode);

let eraserMode = false;

function createGrid(n) {
    grid.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    for (let i=0; i < n*n; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener('mouseover', fillSquare);
        gridSquare.addEventListener('mouseover', eraseSquare);
        grid.appendChild(gridSquare);
    }
}

function fillSquare(e) {
    if (!eraserMode) {
        e.target.style.background = 'black';
    }
}

function eraseSquare(e) {
    if (eraserMode) {
        e.target.style.background = 'white';
    }
}

//add this function as a check to each of click listener functions for
//single colour button, theme button and eraser button.
//add it after setting eraserMode value on click
function setActivePenMode(e) {
    if (!eraserMode && e.target.id == 'eraser') {
        //toggle css class for (active-button) based on boolean value
        singleColourBtn.classList.toggle('active-pen-mode');
        eraserBtn.classList.toggle('active-pen-mode');
        eraserMode = true;
    }
    if (eraserMode && e.target.id == 'single-colour') {
        singleColourBtn.classList.toggle('active-pen-mode');
        eraserBtn.classList.toggle('active-pen-mode');
        eraserMode = false;
    }
}

function resizeGrid() {
    let newSize = prompt("How many grid squares per side would you like? Enter a number between 2 and 100.");
}

function clearGrid() {
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach((gridSquare) => {
        gridSquare.style.background = 'white';
    })
}

window.onload = () => {
    createGrid(DEFAULT_SIZE);
} 