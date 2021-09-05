// Define items 
const container = document.querySelector("#container");
const clearBtn = document.querySelector('#clear');
const gridSizeSlider = document.querySelector('#slider');


// Functions
function createGrid(cellsPerSide) {
  container.style.setProperty('--grid-rows', cellsPerSide);
  container.style.setProperty('--grid-cols', cellsPerSide);
  for (c = 0; c < (cellsPerSide*cellsPerSide); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};




function colorCells() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.querySelectorAll('.grid-item').forEach(cell => {
      cell.addEventListener('touchend', ()=>{cell.classList.add('hover')})})
  }
  else {
    document.querySelectorAll('.grid-item').forEach(cell => {
      cell.addEventListener('mouseenter', ()=>{cell.classList.add('hover')})})
  }

}

function erase() {
  const gridItems = document.querySelectorAll('.grid-item')
  gridItems.forEach(cell => {cell.classList.remove('hover')})
}

function removeGrid() {
  document.querySelectorAll('.grid-item').forEach(item => {item.remove()})
}



function resizeGrid() {
  removeGrid()
  createGrid(document.querySelector('#slider').value)
  colorCells()
}



// Events
clearBtn.addEventListener('click',() => {
  erase()
})

gridSizeSlider.addEventListener('oninput', () => {
  resizeGrid()
})


  




// Call functions
createGrid(16, 16);
colorCells()
