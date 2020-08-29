import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSpeed } from '../../../actions'
import { Select } from '@rmwc/select'

const options = [
    {
        label: '1x',
        value: 1
    },
    {
        label: '2x',
        value: 2
    },
    {
        label: '3x',
        value: 3
    },
    {
        label: '4x',
        value: 4
    },
    {
        label: '5x',
        value: 5
    },
]

const SpeedSlider = React.memo(() => {

    const dispatch = useDispatch()
    const [value, setValue] = useState(1)
    const running = useSelector(state => state.running)

    return (
        <Select
            label='Speed'
            enhanced
            disabled={running}
            value={options.filter(o => o.value === value)[0]}
            options={options}
            theme={'onPrimary'}
            onChange={({target}) => {
                setValue(target.value)
                dispatch(setSpeed(+target.value))
            }}
        />
    )
})

export default SpeedSlider