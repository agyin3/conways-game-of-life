import React from 'react'
import PlayButon from './PlayButton'
import RandomButton from './RandomButton'
import SpeedSlider from './SpeedSlider'
import ResetButton from './ResetButton'

const Buttons = React.memo(() => (
    <div 
    className='buttons-group'
    >
        <ButtonsWrapper />
        <SpeedSlider />
    </div>
))

const ButtonsWrapper = () => (
    <div className='buttons-wrapper'>
        <PlayButon />
        <ResetButton />
        <RandomButton />
    </div>
)

export default Buttons