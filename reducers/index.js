import * as types from '../types'
import produce from 'immer'
import genNewArray from '../utils/genNewArray'
import { genX, genRandomShips, genTri, genTriInverted, genRect, genHourGlass } from '../utils/genPresets'
import { simGeneration } from '../utils/simGeneration'

export const initialState = {
    running: false,
    numRows: 100,
    numCols: 100,
    grid: genNewArray(100, 100),
    generation: 0,
    speed: 15.625
}

export const gameReducer = produce((draft, { type, payload }) => {
    switch(type){
        case types.SET_RUNNING:
            draft.running = payload
            break
        case types.SET_GRID:
            draft.grid = payload
            break
        case types.SIM_GENERATION:
            let { grid, numRows, numCols } = payload
            draft.grid = simGeneration(grid, numRows, numCols)
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
            draft.speed = payload
            break

    }
}, initialState)