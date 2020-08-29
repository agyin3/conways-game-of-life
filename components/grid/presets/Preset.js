import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Preset = React.memo(({img, func, dis}) => {
    const dispatch = useDispatch()
    return (
        <span 
        style={{backgroundImage: 'url('+img+')'}} 
        className='preset-choice'
        onClick={() => dispatch(dis(func))}
        />
    )
})

export default Preset