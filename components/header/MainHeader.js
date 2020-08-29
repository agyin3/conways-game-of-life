import React, { Fragment } from 'react'
import { SimpleTopAppBar, TopAppBarFixedAdjust } from '@rmwc/top-app-bar'

const MainHeader = React.memo(() => (
    <Fragment>
        <SimpleTopAppBar 
        title={`Conway's \n Game Of Life`}
        className='header'
        theme={['primaryBg', 'onPrimary']}
        />
        <TopAppBarFixedAdjust />
    </Fragment>
))

export default MainHeader