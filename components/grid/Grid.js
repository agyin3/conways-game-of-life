import React, { useState, useCallback, useRef, Fragment } from "react";
import produce from "immer";
import { useSelector, useDispatch } from "react-redux";
import { setRunning } from "../../actions";

const numRows = 20;
const numCols = 20;

const Grid = () => {
  const runningRef = useRef();
  const dispatch= useDispatch()
  const [running] = useSelector(state => state.running)
  runningRef.current = running;
  const [grid, setGrid] = useState(() => {
    let newGrid = [];
    for (let i = 0; i < numRows; i++) {
      newGrid.push(Array.from(Array(numCols), () => 0));
    }
    return newGrid;
  });

  // useCallback will only create the function once
  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid((g) => {
      return produce(g, (gridCopy) => {
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
          dispatch(setRunning(!running));
          if (!running) {
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
            key={`${i} - ${j}`}
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
