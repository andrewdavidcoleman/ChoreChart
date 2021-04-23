import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"
import api from '../api'

const ChoreDetail = () => {
    const [ chore, setChore ] = useState({})
    const { id } = useParams()

    useEffect(() => {
        api.get(`/${id}`)
        .then((response) => {
            setChore(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <>
            <Link to="/ChoreChart">
                <i className="fas fa-chevron-left"></i>
            </Link>
            <div>
                {chore.name}:
            </div>
            <div>
                {chore.instructions}
            </div>
            <div>
                ${chore.value}
            </div>
        </>
    )
}

export default ChoreDetail