import * as types from '../types'

export const setRunning = (payload) => (
    {
        type: types.SET_RUNNING,
        payload
    }
)

export const setGrid = (arr) => (
    {
        type: types.SET_GRID,
        payload: arr
    }
)

export const runGeneration = (grid, numRows, numCols) => (
    {
        type: types.SIM_GENERATION,
        payload: {grid, numRows, numCols}
    }
)

export const clickCell = (i, j) => {
    return ({
        type: types.CLICK_CELL,
        payload: {i, j}
    })
}

export const setRandom = () => (
    {
        type: types.SET_RANDOM_GRID
    }
)