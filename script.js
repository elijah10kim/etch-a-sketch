const DEFAULT_SIZE = 16;

const grid = document.getElementById('grid');

function createGrid(n) {
    grid.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    for (let i=0; i < n*n; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener('mouseover', fillSquare)
        grid.appendChild(gridSquare);
    }
}

function fillSquare(e) {
    e.target.style.background = 'black';
}

window.onload = () => {
    createGrid(DEFAULT_SIZE);
} 