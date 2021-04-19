import React, { useContext } from 'react'
import { Context } from '../context/ChoreContext'
import ChoreListItem from '../components/ChoreListItem'
import { Link } from "react-router-dom"

const ChoreList = () => {
    const { state, addChore } = useContext(Context)
    const chores = state.chores.map((chore) =>
        <ChoreListItem chore={chore} key={chore.id.toString()}/>
    );

    return (
        <ul>
            <li className="border-bottom">
                <div className="chore-description">Chore</div>
                <div className="day">Sunday</div>
                <div className="day">Monday</div>
                <div className="day">Tuesday</div>
                <div className="day">Wednesday</div>
                <div className="day">Thursday</div>
                <div className="day">Friday</div>
                <div className="day">Saturday</div>
                <div className="day"></div>
            </li>
            {chores}
            <li>
                {state.isParentMode ?
                    <Link to="/AddChore">
                        <i className="fas fa-plus"></i>
                    </Link>
                    :
                    ''
                }
            </li>
        </ul>
    )
}

export default ChoreList