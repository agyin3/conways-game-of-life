import React, { Fragment } from 'react'
import MainHeader from './components/header/MainHeader'
import Grid from './components/grid/Grid'

export default function App() {
    return(
        <Fragment>
            <MainHeader />
            <div className='main-container'>
                <Grid />
                <div style={{flex: 1, background: 'red'}}>Hello</div>
            </div>
        </Fragment>
    )
}