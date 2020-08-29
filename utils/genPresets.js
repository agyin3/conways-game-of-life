export const genX = (numRows=100, numCols=100) => {
    let newGrid = [];
    for (let i = 0; i < numRows; i++) {
        newGrid.push([])
        for(let j=0; j< numCols; j++){
            if(j === i || j === (numCols - 1) - i){
                newGrid[i].push(1)
            }else {
                newGrid[i].push(0)
            }
        }
    }
    return newGrid;
}

export const genRandomShips = (numRows=100, numCols=100) => {
    let newGrid = []
    let start = 0;
    for(let i=0; i < numRows; i++){
        newGrid.push(Array.from(Array(numCols), () => 0))
        if( i % 5 === 0){
            start = Math.floor(Math.random() * numRows - 2)
        }
        for(let j=0; j < numRows; j++){
            if((i % 5 === 0 && i > numRows / 2) || (i % 5 === 2 && i < numRows / 2)){
                if(j === start){
                    newGrid[i][j] = 1
                    newGrid[i][j+1] = 1
                    newGrid[i][j+2] = 1
                }
            }else if( i % 5 === 1){
                if(j === start){
                    newGrid[i][j] = 1
                }
            }else if((i % 5 === 0 && i < numRows / 2) || (i % 5 === 2 && i > numRows / 2)){
                if(j === start + 1){
                    newGrid[i][j] = 1
                }
            }
        }
    }

    return newGrid
}

// export const genHeart = (numRows, numCols) => {
//     let newGrid = []

//     for(let i=0; i<numRows; i++){
//         newGrid.push(Array.from(Array(numCols), () => 0))
//         for(let j=0; j<numCols; j++){

//         }
//     }
// }

export const genTri = (numRows=100, numCols=100) => {
    let newGrid = []
    for(let i=0; i < numRows; i++){
        newGrid.push(Array.from(Array(numCols), () => 0))
        for(let j=0; j<numCols; j++){
            if(i % 2 !== 0){
                if(j >= i || j <= (numCols - 1) - i){
                    newGrid[i][j] = 1
                }
            }
        }
    }
    return newGrid
}

export const genTriInverted = (numRows=100, numCols=100) => {
    let newGrid = []
    for(let i=0; i < numRows; i++){
        newGrid.push(Array.from(Array(numCols), () => 0))
        for(let j=0; j<numCols; j++){
            if(i % 2 !== 0){
                if(j >= i && j <= (numCols - 1) - i){
                    newGrid[i][j] = 1
                }
            }
        }
    }
    return newGrid
}

export const genRect = (numRows=100, numCols=100) => {
    let newGrid = []
    for(let i=0; i < numRows; i++){
        newGrid.push(Array.from(Array(numCols), () => 0))
        for(let j=0; j<numCols; j++){
            if(i % 2 !== 0 && i < numRows / 2){
                if((j >= i && j <= (numCols - 1) - i)){
                    newGrid[i][j] = 1
                }
            }else if(i % 2 !== 0 && i > numRows / 2){
                if(j <= i && j >= (numCols - 1) - i){
                    newGrid[i][j] = 1
                }
            }

            if(j % 2 !== 0 && j < numCols / 2){
                if((i >= j && i < (numRows - 1) - j)){
                    newGrid[i][j] = 1
                }
            }else if(j % 2 !== 0 && j > numCols / 2){
                if((i <= j && i > (numRows - 1) - j)){
                    newGrid[i][j] = 1
                }
            }
        }
    }
    return newGrid
}

export const genHourGlass = (numRows=100, numCols=100) => {
    let newGrid = []
    for(let i=0; i < numRows; i++){
        newGrid.push(Array.from(Array(numCols), () => 0))
        for(let j=0; j<numCols; j++){
            if(i % 2 !== 0 && i < numRows / 2){
                if((j >= i && j <= (numCols - 1) - i)){
                    newGrid[i][j] = 1
                }
            }else if(i % 2 !== 0 && i > numRows / 2){
                if(j <= i && j >= (numCols - 1) - i){
                    newGrid[i][j] = 1
                }
            }
        }
    }
    return newGrid
}