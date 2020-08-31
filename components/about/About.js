import React from 'react'
import GenHeader from '../header/GenHeader'
import { Typography } from '@rmwc/typography'

const About = () => (
    <div>
        <GenHeader text='About The Algorithm' />
        <Objectives />
    </div>
)

const Objectives = () => (
    <div>
        <div className='about-info'>
            <GenHeader text="Conway's Game Of Life" use='headline3' />
            <Typography use='body1'>Conway's Game Of Life was created by British mathmetician John Conway in 1970. It is a zero-player game which takes an initial input and infinitely evolves based on the infitial field.</Typography>
        </div>
        <div className='about-info'>
            <GenHeader text="Cellular Automata" use='headline3' />
            <Typography use='body1'>Cellular Automaton (CA) is a discrete set of computational systems. CA can simulate the behavior of a set of cells over time based on a simple set of rules. The awesome thing about CA is often times very complex behavior will emerge from a simple set of rules.</Typography>
        </div>
        <div className='about-info'>
            <GenHeader text="Turing Completeness" use='headline3' />
            <Typography use='body1'>Turing Completeness is the ability of a computing system to take in an arbirtary amount of data and make decisions based on a set of rules. In Conway's Game Of Life, this phenomenom is simulated by the user providing a grid of any size while the game infinitely simulates the next generation of life based on a simple set of rules.</Typography>
        </div>
        <div className='about-info'>
            <GenHeader text="Double Buffer" use='headline3' />
            <Typography use='body1'>This project uses a double buffer. Simply put, the web application will display the current generation to the user while runnnig the algorithm in the background to produce the next state/generation. Once this process is complete, the next generation will then become the current state and the process will repeat.</Typography>
        </div>
    </div>
)

export default About