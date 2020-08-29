import React, { useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRunning, runGeneration } from '../../../actions'
import { Fab } from '@rmwc/fab'

const PlayButon = React.memo(() => {
    const runningRef = useRef()
    const gridRef = useRef()
    const speedRef = useRef()
    const dispatch = useDispatch()

    const { running, grid, numRows, numCols, speed } = useSelector(state => state)

    runningRef.current = running;
    gridRef.current = grid
    speedRef.current = speed
  // useCallback will only create the function once
  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    dispatch(runGeneration(gridRef.current, numRows, numCols))
    setTimeout(runSimulation, speedRef.current);
  }, []);

  const handlePlayClick = () => {
    dispatch(setRunning(!running));
      if (!running) {
        runningRef.current = true;
        runSimulation();
      }
  }

    return (
        <Fab 
        mini
        icon={runningRef.current ? 'pause' : 'play_arrow'}
        theme={['secondaryBg']}
        onClick={() => handlePlayClick()}
        />
    )
})

export default PlayButon