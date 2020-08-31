import React, { Fragment } from 'react'
import MainHeader from './components/header/MainHeader'
import Grid from './components/grid/Grid'
import Rules from './components/rules/Rules'

export default function App() {
    return(
        <Fragment>
            <MainHeader />
            <div className='main-container'>
                <Grid />
                <Rules />
            </div>
        </Fragment>
    )
}