import * as types from '../types'
import produce from 'immer'
import genNewArray from '../utils/genNewArray'

export const initialState = {
    running: false,
    numRows: 20,
    numCols: 20,
    grid: genNewArray(20, 20)
}

export const gameReducer = produce((draft, { type, payload }) => {
    switch(type){
        case types.SET_RUNNING:
            draft.running = payload
        
        case types.SET_GRID:
            console.log('p',payload)
            draft.grid = payload

    }
}, initialState)