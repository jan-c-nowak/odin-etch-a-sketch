function calculateGridElementSize(gridSideLength) {
    return (1/gridSideLength)*100; //returns in % container width
}

function generateSquareGrid(gridSideLength){
    const container = document.querySelector(".container");
    const relativeGridElemWidth = calculateGridElementSize(gridSideLength) - 0.2; //0.2 comes from grid-element 0.1% margin 

    for(let i=0; i < gridSideLength * gridSideLength; i++){
        let gridElement = document.createElement("div");
        gridElement.setAttribute('class', "grid-element");

        
        gridElement.style.flexBasis = `${relativeGridElemWidth}%`;
        gridElement.style.height = `${relativeGridElemWidth}%`;
        
        container.appendChild(gridElement);
    }
}

generateSquareGrid(8);