import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../context/ChoreContext'
import ChoreListItem from '../components/ChoreListItem'
import { Link } from "react-router-dom"
import api from '../api'

const ChoreList = () => {
    const { state } = useContext(Context)
    const [ chores, setChores ] = useState([])

    useEffect(() => {
        api.get('/')
        .then((response) => {
            setChores(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    const handleDelete = (id) => {
        api.delete(`/${id}`)
        .then((response) => {
            console.log(id);
            console.log(chores)
            console.log(chores.filter((chore) => chore.id !== parseInt(id)));
            setChores(chores.filter((chore) => chore.id !== parseInt(id)))
        })
        .catch((error) => {
            console.log(error);
        })
    }

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
            {chores.map((chore) =>
                <ChoreListItem 
                chore={chore} 
                handleDelete={() => handleDelete(chore.id)}
                key={chore.id.toString()}/>
            )}
            <li>
                {state.isParentMode ?
                    <Link to="/ChoreChart/AddChore">
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