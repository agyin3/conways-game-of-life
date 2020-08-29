import React from 'react'
import GridBoard from './GridBoard'
import Presets from './presets/Presets'

const Grid = () => {
    return (
        <div className='grid-board'>
            <Presets />
            <GridBoard />
        </div>
    )
}

export default Grid