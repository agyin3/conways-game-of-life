import React from 'react'
import { useDispatch } from 'react-redux'
import { setRandom } from '../../../actions'
import { Fab } from '@rmwc/fab'

const RandomButton = React.memo(() => {
    const dispatch = useDispatch()
    return (
        <Fab
        mini 
        icon='shuffle'
        theme={['secondaryBg']}
        onClick={() => dispatch(setRandom())}
        />
    )
})

export default RandomButton