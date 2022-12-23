const DEFAULT_SIZE = 16;

const grid = document.getElementById('grid');

function createGrid(n) {
    for (let i=0; i < n; i++) {
        const gridSquare = document.createElement('div');
        grid.appendChild(gridSquare);
    }
}

window.onload = () => {
    createGrid(DEFAULT_SIZE);
} 