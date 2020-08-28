import React from 'react'
import { useDispatch } from 'react-redux'
import { setGrid } from '../../../actions'

const ResetButton = () => {
    const dispatch = useDispatch()
    return (
        <button 
        type='button'
        onClick={() => dispatch(setGrid())}
        >
            Reset
        </button>
    )
}

export default ResetButton