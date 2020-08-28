import React from 'react'
import { useDispatch } from 'react-redux'
import { setRandom } from '../../../actions'

const RandomButton = () => {
    const dispatch = useDispatch()
    return (
        <button 
        type='button'
        onClick={() => dispatch(setRandom())}
        >
            Random
        </button>
    )
}

export default RandomButton