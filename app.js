// Define items 
const container = document.getElementById("container");
const clearBtn = document.querySelector('#clear');
const newGridBtn = document.querySelector("#newGrid");

// Functions
function createGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

function colorCells() {
  document.querySelectorAll('.grid-item').forEach(cell => {
    cell.addEventListener('mouseenter', ()=>{cell.classList.add('hover')})
})
}

function erase() {
  const gridItems = document.querySelectorAll('.grid-item')
  gridItems.forEach(cell => {cell.classList.remove('hover')})
}

function removeGrid() {
  document.querySelectorAll('.grid-item').forEach(item => {item.remove()})
}

function createNewGrid() {
  rows = parseInt( prompt("How many rows do you want? ", 16))
  cols = parseInt(prompt("How many cols do you want? ", 16) )
  removeGrid()
  createGrid(rows,cols)
  colorCells()
}

// Events
clearBtn.addEventListener('click',() => {
  erase()
})


newGridBtn.addEventListener('click',() => {
  createNewGrid()
})

// Call functions
createGrid(16, 16);
colorCells()
