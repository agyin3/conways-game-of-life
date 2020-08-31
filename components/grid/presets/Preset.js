import React from 'react'
import { useDispatch } from 'react-redux'

const Preset = React.memo(({img, func, dis}) => {
    const handleClick = () => {
        dispatch(dis(func))
        window.scrollTo(0,0)
    }
    const dispatch = useDispatch()
    return (
        <span 
        style={{backgroundImage: 'url('+img+')'}} 
        className='preset-choice'
        onClick={() => handleClick()}
        />
    )
})

export default Preset