import React from 'react'

const ChoreListItem = ({ chore }) => {
    return (
        <li className="chore">
            <span className="chore-name">{chore.name}</span>
            <span className="day">
                <span className="circle"></span>
            </span>
            <span className="day">
                <span className="circle"></span>
            </span>
            <span className="day">
                <span className="circle"></span>
            </span>
            <span className="day">
                <span className="circle"></span>
            </span>
            <span className="day">
                <span className="circle"></span>
            </span>
            <span className="day">
                <span className="circle"></span>
            </span>
            <span className="day">
                <span className="circle"></span>
            </span>
        </li>    
    )
}

export default ChoreListItem