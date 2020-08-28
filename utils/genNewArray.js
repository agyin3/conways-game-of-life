export default (numRows, numCols) => {
    let newGrid = [];
    for (let i = 0; i < numRows; i++) {
      newGrid.push(Array.from(Array(numCols), () => 0));
    }
    return newGrid;
}