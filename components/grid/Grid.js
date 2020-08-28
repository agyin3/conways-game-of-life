import React, { useCallback, useRef, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRunning, runGeneration, clickCell } from "../../actions";

const Grid = () => {
  const runningRef = useRef()
  const gridRef = useRef()
  const dispatch = useDispatch()
  const {running, grid, numRows, numCols, speed} = useSelector(state => state)

  runningRef.current = running;
  gridRef.current = grid

  // useCallback will only create the function once
  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    dispatch(runGeneration(gridRef.current, numRows, numCols))

    setTimeout(runSimulation, speed);
  }, []);


  const handleCellClick = (i, j) => {
    dispatch(clickCell(i, j));
  };

  const handlePlayClick = (running) => {
    dispatch(setRunning(!running));
      if (!running) {
        runningRef.current = true;
        runSimulation();
      }
  }

  return (
    <Fragment>
      <button
        onClick={() => handlePlayClick(running)}
      >
        {running ? 'Stop' : 'Start'}
      </button>
      <h2></h2>
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
