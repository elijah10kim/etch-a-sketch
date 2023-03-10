const DEFAULT_SIZE = 16;

const grid = document.getElementById('grid');

const singleColourBtn = document.getElementById('single-colour');
singleColourBtn.addEventListener('click', setActivePenMode)

const clearGridBtn = document.getElementById('clear-grid');
clearGridBtn.addEventListener('click', () => {clearGrid(false)});

const resizeGridBtn = document.getElementById('grid-size');
resizeGridBtn.addEventListener('click', resizeGrid);

const eraserBtn = document.getElementById('eraser');
eraserBtn.addEventListener('click', setActivePenMode);

const multiColourBtn = document.getElementById('multi-colour');
multiColourBtn.addEventListener('click', setActivePenMode);

let eraserMode = false;
let rainbowMode = false;
let currentSize = DEFAULT_SIZE;

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
    if (!eraserMode && !rainbowMode) {
        e.target.style.background = 'black';
    }
    if (!eraserMode && rainbowMode) {
        e.target.style.background = getRandomColour();
    }
}

function eraseSquare(e) {
    if (eraserMode) {
        e.target.style.background = 'white';
    }
}

function getRandomColour() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function setActivePenMode(e) {
    if (!eraserMode && e.target.id == 'eraser') {
        if (!rainbowMode) {
            singleColourBtn.classList.toggle('active-pen-mode');
        } else {
            multiColourBtn.classList.toggle('active-pen-mode');
            rainbowMode = false;
        }
        eraserBtn.classList.toggle('active-pen-mode');
        eraserMode = true;
    }
    if (eraserMode && e.target.id == 'single-colour') {
        singleColourBtn.classList.toggle('active-pen-mode');
        eraserBtn.classList.toggle('active-pen-mode');
        eraserMode = false;
    }
    if (eraserMode && e.target.id == 'multi-colour') {
        multiColourBtn.classList.toggle('active-pen-mode');
        eraserBtn.classList.toggle('active-pen-mode');
        eraserMode = false;
        rainbowMode = true;
    }
    if (!rainbowMode && !eraserMode && e.target.id == 'multi-colour') {
        multiColourBtn.classList.toggle('active-pen-mode');
        singleColourBtn.classList.toggle('active-pen-mode');
        rainbowMode = true;
    }
    if (rainbowMode && !eraserMode && e.target.id == 'single-colour') {
        multiColourBtn.classList.toggle('active-pen-mode');
        singleColourBtn.classList.toggle('active-pen-mode');
        rainbowMode = false;
    }
}

function resizeGrid() {
    let newSize;
    do {
        newSize = prompt("Enter the number of squares per side (between 2 and 48).");
        if (!newSize) {
            newSize = currentSize;
            break;
        }
    } while (!(Number.isInteger(parseInt(newSize))) || newSize > 48 || newSize < 2);
    currentSize = newSize;
    clearGrid(true);
    createGrid(newSize);
}

function clearGrid(resize) {
    let gridSquares = document.querySelectorAll('.grid-square');
    if (resize){
        gridSquares.forEach((gridSquare) => {
            gridSquare.remove();
        })
    } else {
        gridSquares.forEach((gridSquare) => {
            gridSquare.style.background = 'white';
        })
    }
}

window.onload = () => {
    createGrid(DEFAULT_SIZE);
} 