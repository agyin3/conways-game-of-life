import React from 'react'
import { useSelector } from 'react-redux'

const GridHeader = () => {
    const gen = useSelector(state => state.generation)

    return <h2>Generation: {gen}</h2>
}

export default GridHeader