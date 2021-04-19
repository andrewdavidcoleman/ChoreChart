import React, { useState } from 'react'

const CheckCircle = () => {
    const [status, setStatus] = useState('unchecked')

    const handleClick = () => {
        setStatus(status === 'unchecked' ? 'checked' : 'unchecked')
    }

    return (
        <div className="day">
            <span className="circle" onClick={handleClick}>
                {status === 'checked' 
                ? <i className="fas fa-check"></i> 
                : status === 'pending' 
                ? <i class="far fa-eye"></i> 
                : ''}
            </span>
        </div>
    )
}

export default CheckCircle