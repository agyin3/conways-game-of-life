import React from 'react'
import PlayButon from './PlayButton'
import RandomButton from './RandomButton'
import SpeedSlider from './SpeedSlider'
import ResetButton from './ResetButton'

const Buttons = () => (
    <div>
        <PlayButon />
        <ResetButton />
        <RandomButton />
        <SpeedSlider />
    </div>
)

export default Buttons