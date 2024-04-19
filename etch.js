function calculateGridElementSize(gridSideLength) {
    return (1/gridSideLength)*100; //returns in % container width
}

function styleGridElement(gridElement, relativeGridElemWidth){
    gridElement.setAttribute('class', "grid-element");
    gridElement.style.flexBasis = `${relativeGridElemWidth}%`;
    gridElement.style.height = `${relativeGridElemWidth}%`;
}

function generateSquareGrid(gridSideLength){
    const container = document.querySelector(".container");
    const relativeGridElemWidth = calculateGridElementSize(gridSideLength) - 0.16; //0.2 comes from grid-element 0.1% margin 

    for(let i=0; i < gridSideLength * gridSideLength; i++){
        let gridElement = document.createElement("div");

        styleGridElement(gridElement, relativeGridElemWidth);
        
        
        
        container.appendChild(gridElement);
    }
}

function addMouseoverEventListenerToContainer(container){
    container.addEventListener('mouseover', (event) => {
        if(event.target.classList.contains("container")) {return;}
        event.target.style.backgroundColor = "gray";
    });
}

function deleteExistingGrid(){
    const gridElements = document.querySelectorAll(".grid-element");
    const container = document.querySelector(".container");
    
    gridElements.forEach((el) => {container.removeChild(el);});
}

function setNewGridSize(newSize){
    deleteExistingGrid();
    generateSquareGrid(newSize);
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

    
    setNewGridSize(newGridSize);
}

function addOnClickEventToChangeGridButton(onClickFunction){
    const changeGridButton = document.querySelector(".change-grid");
    changeGridButton.onclick = onClickFunction;
}



const container = document.querySelector(".container");
addMouseoverEventListenerToContainer(container);
addOnClickEventToChangeGridButton(newGridButtonOnClick);
generateSquareGrid(16)
