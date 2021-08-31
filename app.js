const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

// const gridItems = document.querySelectorAll('.grid-item');
// gridItems.forEach(cell => cell.addEventListener('mouseeenter', () =>{cell.classList.add('hover')}))
const gridItems = document.querySelectorAll('.grid-item')
document.querySelectorAll('.grid-item').forEach(cell => {
    cell.addEventListener('mouseenter', ()=>{cell.classList.add('hover')})
})

function erase() {
  gridItems.forEach(cell => {cell.classList.remove('hover')})
}
btn = document.querySelector('#clear');
btn.addEventListener('click',() => {
  erase()
})
