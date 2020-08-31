import React from 'react'
import { useSelector } from 'react-redux'
import GenHeader from '../../header/GenHeader'

const GridHeader = () => {
    const gen = useSelector(state => state.generation)

    return <GenHeader text={`Generation: ${gen}`} />
}

export default GridHeader