import React, { useState, useCallback, useRef, Fragment } from "react";
import produce from "immer";

const numRows = 20;
const numCols = 20;

const Grid = () => {
  const [grid, setGrid] = useState(() => {
    let newGrid = [];
    for (let i = 0; i < numRows; i++) {
      newGrid.push(Array.from(Array(numCols), () => 0));
    }
    return newGrid;
  });

  const [isRunning, setIsRunning] = useState(false);

  // Setting up ref to isRunning state
  // so we can utilize inside of the
  // runSimulation callback

  const runningRef = useRef();
  runningRef.current = isRunning;

  // useCallback will only create the function once
  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid((g) => {
      return produce(g, (gridCopy) => {
          console.log(g)
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

            if(i===2 && j===4){
                console.log('1', neighbors)
            }else if(i===3 && j===4){
                console.log('2',neighbors)
            }else if(i===4 && j===4){
                console.log('3',neighbors)
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
      });
    });

    setTimeout(runSimulation, 1000);
  }, []);

  const handleCellClick = (i, j) => {
    const newGrid = produce(grid, (gridCopy) => {
      gridCopy[i][j] = gridCopy[i][j] ? 0 : 1;
    });
    setGrid(newGrid);
  };

  return (
    <Fragment>
      <button
        onClick={() => {
          setIsRunning(!isRunning);
          if (!isRunning) {
            runningRef.current = true;
            runSimulation();
          }
        }}
      >
        Start
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
        }}
      >
        {grid.map((row, i) =>
          row.map((col, j) => (
            <div
              style={{
                height: "20px",
                width: "20px",
                background: grid[i][j] ? "pink" : undefined,
                border: "1px solid blue",
              }}
              onClick={() => handleCellClick(i, j)}
            />
          ))
        )}
      </div>
    </Fragment>
  );
};

export default Grid;
