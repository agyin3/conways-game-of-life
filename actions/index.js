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

export const setSpeed = (speed) => (
    {
        type: types.SET_SPEED,
        payload: speed
    }
)

export const setTri = (func) => (
    {
        type: types.SET_TRI,
        payload: func
    }
)

export const setTriInverted = (func) => (
    {
        type: types.SET_TRI_INVERTED,
        payload: func
    }
)

export const setX = (func) => (
    {
        type: types.SET_X,
        payload: func
    }
)

export const setHourglass = (func) => (
    {
        type: types.SET_HOURGLASS,
        payload: func
    }
)

export const setRect = (func) => (
    {
        type: types.SET_RECT,
        payload: func
    }
)