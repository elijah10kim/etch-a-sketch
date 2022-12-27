const DEFAULT_SIZE = 16;

const grid = document.getElementById('grid');

const clearGridBtn = document.getElementById('clear-grid');
clearGridBtn.addEventListener('click', clearGrid);

const resizeGridBtn = document.getElementById('grid-size');
resizeGridBtn.addEventListener('click', resizeGrid);

const eraserBtn = document.getElementById('eraser');
eraserBtn.addEventListener('click', () => {eraserMode = true})

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