import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clickCell } from "../../actions";
import Buttons from "./buttons/Buttons";
import GridHeader from "./header/GridHeader";

const colors = [
  '#f5b5fc',
  '#96f7d2',
  '#f0f696',
  '#fcb1b1'
]

const Grid = () => {
  const dispatch = useDispatch()
  const { grid, numRows, numCols } = useSelector(state => state)


  const handleCellClick = (i, j) => {
    dispatch(clickCell(i, j));
  };

  return (
    <Fragment>
      <GridHeader />
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
                background: !grid[i][j] ? "#000" : colors[Math.floor(Math.random() * 4)]
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
