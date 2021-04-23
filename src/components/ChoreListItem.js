import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../context/ChoreContext'
import CheckCircle from '../components/CheckCircle'
import { Link } from 'react-router-dom'
import api from '../api'

const ChoreListItem = ({ chore, handleDelete }) => {
    const { state, setAmountSaved, increaseAmountSaved } = useContext(Context)
    const [ days, setDays ] = useState([])

    useEffect(() => {
        api.get(`/days/${chore.id}`)
        .then((response) => {
            setDays(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <li className="chore">
            <div className="chore-description">
                {state.isParentMode ? 
                    <div>
                        <Link to={`/ChoreChart/EditChore/${chore.id}`}>
                            <i className="fas fa-pencil-alt"></i>
                        </Link>
                    </div>
                : ''}
                <div>
                    <div>
                        <Link to={`/ChoreChart/ChoreDetail/${chore.id}`}>
                            {chore.name}
                        </Link>
                    </div>
                    <div>
                        ${chore.value}
                    </div>
                </div>
            </div>
            {days.map((day, i) =>  <CheckCircle chore={chore} day={day} key={i} />)}
            <div className="day">
                {state.isParentMode ? 
                        <i className="fas fa-times" onClick={() => handleDelete(chore.id)}></i>
                : ''}
            </div>
        </li>    
    )
}

export default ChoreListItem