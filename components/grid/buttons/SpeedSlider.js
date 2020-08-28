import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSpeed } from '../../../actions'

const SpeedSlider = () => {
    const dispatch = useDispatch()

    return (
        <input
            type='range'
            min='100'
            max='500'
            step='50'
            onChange={({target}) => dispatch(setSpeed(target.value))}
        />
    )
}

export default SpeedSlider