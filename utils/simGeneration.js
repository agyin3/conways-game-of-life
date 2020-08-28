export const simGeneration = (g, numRows, numCols) => {
    let gridCopy = JSON.parse(JSON.stringify([...g]))
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
          // Step 1 - Finding Neighbors

          let neighbors = 0;

          // All cells not on border
          if (i !== 0 && i !== (numRows - 1) && j !== 0 && j !== (numCols - 1)) {
            neighbors =
              g[i - 1][j - 1] +
              g[i - 1][j] +
              g[i - 1][j + 1] +
              g[i][j - 1] +
              g[i][j + 1] +
              g[i + 1][j - 1] +
              g[i + 1][j] +
              g[i + 1][j + 1];
          }

          // Grid Top Row
          else if (i === 0) {
            // Top Left Corner
            if (j === 0) {
              neighbors = g[i][j + 1] + g[i + 1][j + 1] + g[i + 1][j];
            }
            // Top Right Corner
            else if (j === numCols - 1) {
              neighbors = g[i][j - 1] + g[i + 1][j - 1] + g[i + 1][j];
            }

            // All other cases
            else {
              neighbors =
                g[i][j + 1] +
                g[i + 1][j + 1] +
                g[i + 1][j] +
                g[i + 1][j - 1] +
                g[i][j - 1];
            }
          }

          // Grid Left Row
          else if (j === 0) {
            // Bottom Left Corner
            if (i === numRows - 1) {
              neighbors = g[i - 1][j] + g[i - 1][j + 1] + g[i][j + 1];
            }

            // All other cases
            else {
              neighbors =
                g[i - 1][j] +
                g[i - 1][j + 1] +
                g[i][j + 1] +
                g[i + 1][j] +
                g[i + 1][j + 1];
            }
          }

          // Grid Right Row
          else if (j === numCols - 1) {
            // Bottom Right Corner
            if (i === numRows - 1) {
              neighbors = g[i - 1][j] + g[i - 1][j - 1] + g[i][j - 1];
            }

            // All other Cases
            else {
              neighbors =
                g[i - 1][j] +
                g[i - 1][j - 1] +
                g[i][j - 1] +
                g[i + 1][j - 1] +
                g[i + 0][j];
            }
          }

          // Grid Bottom Row
          else {
            neighbors =
              g[i - 1][j] +
              g[i - 1][j - 1] +
              g[i][j - 1] +
              g[i - 1][j + 1] +
              g[i][j];
          }

          // Step 2 - Updating Cells

          // Cell is alive(1)
          if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0
          }else if(g[i][j] === 0 && neighbors === 3){
              gridCopy[i][j] = 1
          }
        }
      }
      return gridCopy
}