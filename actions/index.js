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