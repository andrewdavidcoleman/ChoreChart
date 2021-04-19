import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"
import { Context } from '../context/ChoreContext'

const ChoreDetail = () => {
    const { id } = useParams()
    const { state, editChore } = useContext(Context)
    const chore = state.find(chore => chore.id == id)

    return (
        <>
            <Link to="/">
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