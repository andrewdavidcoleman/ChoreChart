import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../context/ChoreContext'
import api from '../api'

const CheckCircle = ({ chore, day }) => {
    const { state, setAmountSaved } = useContext(Context)
    const [ status, setStatus ] = useState(day.status)

    const handleClick = () => {
        //TODO: day.status === string to allow for future implementation of 'pending' status
        setStatus(status === 'unchecked' ? 'checked' : 'unchecked')
        api.put('/setday', { ...day, status: status === 'unchecked' ? 'checked' : 'unchecked' })
        setAmountSaved(status === 'unchecked' ? (state.amountSaved + chore.value) : (state.amountSaved - chore.value))
    }

    return (
        <div className="day">
            <span className="circle" onClick={handleClick}>
                {status === 'checked'
                ? <i className="fas fa-check"></i>
                : ''}
            </span>
        </div>
    )
}

export default CheckCircle