function calculateGridElementSize(gridSideLength) {
    return (1/gridSideLength)*100; //returns in % container width
}

function styleGridElement(gridElement, relativeGridElemWidth, classes){
    classes.forEach(element => {
        gridElement.classList.add(element);
    });
    
    gridElement.style.flexBasis = `${relativeGridElemWidth}%`;
    gridElement.style.height = `${relativeGridElemWidth}%`;
}

function generateSquareGrid(gridSideLength, classes=['grid-element']){
    const container = document.querySelector(".container");
    const relativeGridElemWidth = calculateGridElementSize(gridSideLength) - 0.16; //0.2 comes from grid-element 0.1% margin 

    for(let i=0; i < gridSideLength * gridSideLength; i++){
        let gridElement = document.createElement("div");

        styleGridElement(gridElement, relativeGridElemWidth, classes);
        
        
        
        container.appendChild(gridElement);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateRandomRGB(){
    let R = getRandomInt(256);
    let B = getRandomInt(256);
    let G = getRandomInt(256);
    return `rgb(${R},${G},${B})`
}

function addMouseoverEventListenerToContainer(){
    const container = document.querySelector(".container");
    container.addEventListener('mouseover', (event) => {
        if(event.target.classList.contains("container")) {return;}
        
        if(event.target.classList.contains("random-colors")){
            event.target.style.backgroundColor = generateRandomRGB();
        }

        else{
            event.target.style.backgroundColor = "gray";
        }
    });
}

function deleteExistingGrid(){
    const gridElements = document.querySelectorAll(".grid-element");
    const container = document.querySelector(".container");
    
    gridElements.forEach((el) => {container.removeChild(el);});
}

function setNewGridSize(newSize, classes){
    deleteExistingGrid();
    generateSquareGrid(newSize, classes);
}



function newGridButtonOnClick(){
    let newGridSize = prompt("Enter new grid size:", 16);

    if(newGridSize > 128) {
        alert("Max size is 128. The size will be now set to 128x128.");
        newGridSize = 128;
    }

    if(newGridSize < 1) {
        alert("Min size is 1. The size will be now set to 1x1.");
        newGridSize = 1;
    }
    setNewGridSize(newGridSize, ['grid-element']);
}

function colorfulGridButtonOnClick(){
    setNewGridSize(getGridSize(),['grid-element','random-colors']);
}

function resetGridOnClick() {
    const currentGridSize = getGridSize();
    setNewGridSize(currentGridSize);
}

function isRandomColors() {
    const testGridElement = document.querySelector(".random-colors");
    return testGridElement == null ? false : true; 
}

//UI Buttons handler

function addButtonEventListenersToUI () {
    const ui = document.querySelector(".UI");
    ui.addEventListener('click', (event) => {
        if(event.target.classList.contains("reset-grid")) {
            resetGridOnClick();
        }
        if(event.target.classList.contains("change-grid")) {
            newGridButtonOnClick();
        }
        if(event.target.classList.contains("colorful-grid")){
            isRandomColors() ? resetGridOnClick() : colorfulGridButtonOnClick();
        }
    });
}

function getGridSize() {
    const container = document.querySelector(".container");
    return Math.sqrt(container.childElementCount); 
}

function EtchASketch() {
    addMouseoverEventListenerToContainer();
    addButtonEventListenersToUI();
    generateSquareGrid(16);
}

EtchASketch();