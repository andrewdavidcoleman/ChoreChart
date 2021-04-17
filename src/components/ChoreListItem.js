import React, { useContext } from 'react'
import { Context } from '../context/ChoreContext'

const ChoreListItem = ({ chore }) => {
    const { state, deleteChore } = useContext(Context);

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
            <span>
                <i className="fas fa-times"></i>
            </span>
        </li>    
    )
}

export default ChoreListItem