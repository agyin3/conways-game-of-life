import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clickCell } from "../../actions";
import Buttons from "./buttons/Buttons";

const Grid = () => {
  const dispatch = useDispatch()
  const { grid, numRows, numCols } = useSelector(state => state)


  const handleCellClick = (i, j) => {
    dispatch(clickCell(i, j));
  };

  return (
    <Fragment>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 5px)`,
          gridTemplateRows: `repeat(${numRows}, 5px)`,
        }}
      >
        {grid.map((row, i) =>
          row.map((col, j) => (
            <div
            key={`${i} - ${j}`}
              style={{
                height: "5px",
                width: "5px",
                background: grid[i][j] ? "pink" : undefined,
              }}
              onClick={() => handleCellClick(i, j)}
            />
          ))
        )}
      </div>
      <Buttons />
    </Fragment>
  );
};

export default Grid;
