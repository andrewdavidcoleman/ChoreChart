import React, { useContext } from 'react'
import { Context } from '../context/ChoreContext'
import CheckCircle from '../components/CheckCircle'
import { Link } from "react-router-dom"

const ChoreListItem = ({ chore }) => {
    const { state, deleteChore } = useContext(Context);

    return (
        <li className="chore">
            <div className="chore-description">
                {state.isParentMode ? 
                    <div>
                        <Link to={`/EditChore/${chore.id}`}>
                            <i className="fas fa-pencil-alt"></i>
                        </Link>
                    </div>
                : ''}
                <div>
                    <div>
                        <Link to={`/ChoreDetail/${chore.id}`}>
                            {chore.name}
                        </Link>
                    </div>
                    <div>
                        ${chore.value}
                    </div>
                </div>
            </div>
            {chore.days.map((day, i) =>  <CheckCircle chore={chore} day={day} key={i} />)}
            <div className="day">
                {state.isParentMode ? 
                        <i className="fas fa-times" onClick={() => deleteChore(chore.id)}></i>
                : ''}
            </div> 
        </li>    
    )
}

export default ChoreListItem