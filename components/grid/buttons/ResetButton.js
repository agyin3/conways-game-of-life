import React from 'react'
import { useDispatch } from 'react-redux'
import { setGrid } from '../../../actions'
import { Fab } from '@rmwc/fab'

const ResetButton = React.memo(() => {
    const dispatch = useDispatch()
    return (
        <Fab
        mini 
        icon='restore'
        className='button'
        theme={['secondaryBg', 'headline1']}
        onClick={() => dispatch(setGrid())}
        />
    )
})

export default ResetButton