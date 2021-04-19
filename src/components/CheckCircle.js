import React, { useState, useContext } from 'react'
import { Context } from '../context/ChoreContext'

const CheckCircle = ({ chore, day }) => {
    const { increaseAmountSaved, decreaseAmountSaved, setCheckCircleStatus } = useContext(Context)

    const handleClick = () => {
        if (day.status === 'unchecked') {
            setCheckCircleStatus(chore.id, day.name, 'checked')
            increaseAmountSaved(chore.value)
        } else {
            setCheckCircleStatus(chore.id, day.name, 'unchecked')
            decreaseAmountSaved(chore.value)
        }
    }

    return (
        <div className="day">
            <span className="circle" onClick={handleClick}>
                {day.status === 'checked' 
                ? <i className="fas fa-check"></i> 
                : day.status === 'pending' 
                ? <i class="far fa-eye"></i> 
                : ''}
            </span>
        </div>
    )
}

export default CheckCircle