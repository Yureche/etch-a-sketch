// Define items 
const container = document.querySelector("#container");
const clearBtn = document.querySelector('#clear');
const gridSizeSlider = document.querySelector('#slider');
const eraserBtn = document.querySelector('#eraser');
const blackBtn = document.querySelector('#black');
const colorPicker = document.querySelector('#colorPicker')
const randomColorBtn = document.querySelector('#random-color')

colorPicker.value = '#9147ff'

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




function addEventToCells() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.querySelectorAll('.grid-item').forEach(cell => {
      cell.addEventListener('touchend', ()=>{cell.classList.add('black')})})
  }
  else {
    document.querySelectorAll('.grid-item').forEach(cell => {
      cell.addEventListener('mouseenter', ()=>{cell.classList.add('black')})})
  }

}

function clearGrid() {
  const gridItems = document.querySelectorAll('.grid-item')
  gridItems.forEach(cell => {cell.style.backgroundColor = "#f0f2f5"})
}

function removeGrid() {
  document.querySelectorAll('.grid-item').forEach(item => {item.remove()})
}



function resizeGrid() {
  removeGrid()
  createGrid(document.querySelector('#slider').value)
  addEventToCells()
}

function chooseColor() {
  let color = colorPicker.value;
  document.querySelectorAll('.grid-item').forEach(cell => {
    cell.addEventListener('mouseenter', ()=>{cell.style.backgroundColor = `${color}`})})

}

function generateColors() {
  return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}




// Events
clearBtn.addEventListener('click',() => {
  clearGrid()
})

gridSizeSlider.addEventListener('oninput', () => {
  resizeGrid()
})

blackBtn.addEventListener('click', () => {
  document.querySelectorAll('.grid-item').forEach(cell => {
    cell.addEventListener('mouseenter', ()=>{cell.style.backgroundColor = "#000"})})
})

eraserBtn.addEventListener('click', () => {
  document.querySelectorAll('.grid-item').forEach(cell => {
    cell.addEventListener('mouseenter', ()=>{cell.style.backgroundColor = "#f0f2f5"})})
})

randomColorBtn.addEventListener('click', () => {
  document.querySelectorAll('.grid-item').forEach(cell => {
    cell.addEventListener('mouseenter', ()=>{cell.style.backgroundColor = generateColors()})})

})






// Call functions
createGrid(16, 16);
addEventToCells()