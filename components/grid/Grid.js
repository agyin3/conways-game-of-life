import React, { useState } from 'react'
import produce from 'immer'

const numRows = 20
const numCols = 20

const Grid = () => {
    const [grid, setGrid] = useState(() => {
        let newGrid = []
        for(let i=0; i<numRows; i++){
            newGrid.push(Array.from(Array(numCols), () => 0))
        }
        return newGrid
    })

    const handleCellClick = (i, j) => {
        const newGrid = produce(grid, gridCopy => {
            gridCopy[i][j] = gridCopy[i][j] ? 0 : 1
        })
        setGrid(newGrid)
    }

    return (
        <div 
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${numCols}, 20px)`
            }}
        >
            {grid.map((row, i) => row.map((col, j) => (
                <div
                    style={{
                        height: '20px',
                        width: '20px',
                        background: grid[i][j] ? 'pink' : undefined,
                        border: '1px solid blue'
                    }}
                    onClick={() => handleCellClick(i, j)}
                />
            )))}
        </div>
    )
}

export default Grid