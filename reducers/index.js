import * as types from '../types'
import produce from 'immer'
import genNewArray from '../utils/genNewArray'
import { simGeneration } from '../utils/simGeneration'

export const initialState = {
    running: false,
    numRows: 100,
    numCols: 100,
    grid: genNewArray(100, 100),
    generation: 0,
    speed: 156.25
}

export const gameReducer = produce((draft, { type, payload }) => {
    switch(type){
        case types.SET_RUNNING:
            draft.running = payload
            break

        case types.SET_GRID:
            draft.running = false
            draft.generation = 0
            draft.grid = genNewArray(100, 100)
            break

        case types.SIM_GENERATION:
            let { grid, numRows, numCols } = payload
            let newGrid = simGeneration(grid, numRows, numCols)
            draft.grid = newGrid
            draft.generation += 1
            break

        case types.CLICK_CELL:
            let {i, j} = payload
            draft.grid[i][j] = draft.grid[i][j] ? 0 : 1;
            break
        
        case types.SET_RANDOM_GRID:
            draft.grid.forEach((row, i) => row.forEach((col, j) => (
                draft.grid[i][j] = Math.round(Math.random())
            )))
            break
        
        case types.SET_SPEED:
            draft.speed = payload === 1 ? 156.25 : 156.25 / (payload)
            break
        
        case types.SET_TRI:
        case types.SET_TRI_INVERTED:
        case types.SET_HOURGLASS:
        case types.SET_RECT:
        case types.SET_X:
            let newBoard = payload()
            draft.running = false
            draft.generation = 0
            draft.grid = newBoard
            break

    }
}, initialState)