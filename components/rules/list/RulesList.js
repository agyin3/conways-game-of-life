import React from 'react'

const RulesList = () => (
    <ul>
        <li>
            Each populated cell with one or no neighbors dies, as if by solitude.
        </li>
        <li>
            Each populated cell with four or more neighbors dies, as if by overpopulation.
        </li>
        <li>
            Each populated cell with two or three neighbors survives.
        </li>
        <li>
            Each unpopulated cell with three neighbors becomes populated.
        </li>
        
    </ul>
)

export default RulesList