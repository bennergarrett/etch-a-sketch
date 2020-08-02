
const gridVal = 4;
const container = document.querySelector('.squareGrid');

function createGrid(gridSize) {
    container.style.setProperty('--grid-rows', gridSize);
    container.style.setProperty('--grid-cols', gridSize);
    for (c = 0; c < (gridSize ** 2); c++) {
      let cell = document.createElement("div");

      container.appendChild(cell).className = "square";
    };
  };

createGrid(gridVal);

let sketcher = document.querySelectorAll('.square')

sketcher.forEach(item => {
    item.addEventListener('mouseover', function(){
        item.style.backgroundColor = 'black';
        console.log('hover');
    });
});

document.querySelector('.clear').addEventListener('click', function(){
    document.querySelectorAll('.square').forEach(item =>{
        item.style.backgroundColor = 'cyan';

    });

});

