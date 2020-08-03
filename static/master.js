//constants
const gridVal = 40;
const container = document.querySelector('.squareGrid');
let colorSet = 'defaultSet';

//some buttons
const black = document.querySelector('.defaultBtn')
const magicWand = document.querySelector('.randomBtn');
const clear = document.querySelector('.clearBtn');
const grey = document.querySelector('.scaleBtn');

//event listeners
clear.addEventListener('click', clearAll);
magicWand.addEventListener('click', temp => colorSet = 'randomColor');
black.addEventListener('click', temp => colorSet = 'defaultSet');
grey.addEventListener('click', temp => colorSet = 'scaleColor');

//case statement to control color buttons
function colorChange(e){
    switch(colorSet) {
        case "defaultSet":
            e.target.classList.add('defaultColor');
            e.target.classList.remove('greyScale');
            e.target.classList.remove('colorChange');
            break;

        case "randomColor":
            randomColor(e);
            break;

        case "scaleColor":

            e.target.classList.add('greyScale');
            e.target.classList.remove('colorChange');
            scale(e);
            break;

    }
}

//create grid
function createGrid(gridSize) {
    container.style.setProperty('--grid-rows', gridSize);
    container.style.setProperty('--grid-cols', gridSize);
    for (c = 0; c < (gridSize ** 2); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "square";
        cell.addEventListener('mouseover', colorChange)
    };
};

//resize grid
function resize(){
    let size = document.getElementById('size');

    if(size.value < 100) {
        //remove grid
        document.querySelectorAll('.square').forEach(item =>{
            item.parentNode.removeChild(item);
        });
        //create new grid
        createGrid(size.value);
    }
    else{
        alert('Please enter value under 100');
        size.value='';
    }
}

//change square to random color
function randomColor(e){
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    e.target.style.setProperty('--random-color', randomColor);
    e.target.classList.add('colorChange');
    e.target.classList.remove('greyScale');
};

function scale(e){
    let currentOpacity = Number(window.getComputedStyle(e.target).getPropertyValue("opacity"));
    if(currentOpacity <1){
        currentOpacity += 0.1;
        e.target.style.setProperty('--grey-scale', currentOpacity);
    }        
}


//reset color
function clearAll(){
    document.querySelectorAll('.square').forEach(item =>{
        item.classList.remove('colorChange');
        item.classList.remove('defaultColor');
        item.target.classList.remove('greyScale');
    });
}


createGrid(gridVal);
