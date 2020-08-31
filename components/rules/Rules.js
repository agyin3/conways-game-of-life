import React from 'react'
import RulesList from './list/RulesList'
import About from '../about/About'
import GenHeader from '../header/GenHeader'

const Rules = () => {
    return (
        <div className='rules'>
            <GenHeader text='Rules Of The Game' />
            <RulesList />
            <About />
        </div>
    )
}

export default Rules