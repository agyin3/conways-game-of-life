import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@rmwc/typography'

const GridHeader = () => {
    const gen = useSelector(state => state.generation)

    return <Typography use='headline2' className='header' theme={['onSecondary']}>Generation: {gen}</Typography>
}

export default GridHeader