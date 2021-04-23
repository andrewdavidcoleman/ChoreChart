import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'

const ChoreForm = ({ onSubmit, initialId }) => {
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [instructions, setInstructions] = useState('')
    const [value, setValue] = useState(0)

    useEffect(() => {
        if (initialId !== 0) {
            api.get(`/${initialId}`)
            .then((response) => {
                setId(response.data.id)
                setName(response.data.name)
                setInstructions(response.data.instructions)
                setValue(response.data.value)
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }, [])

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            onSubmit(id, name, instructions, value)
        }}>
            <Link to="/ChoreChart">
                <i className="fas fa-chevron-left"></i>
            </Link>
            <label htmlFor="name">Name:</label>
            <input type="text" name="chorename" value={name} onChange={(e) => setName(e.target.value)}/>

            <label htmlFor="instructions">Instructions:</label>
            <textarea name="choreinstructions" value={instructions} onChange={(e) => setInstructions(e.target.value)}/>

            <label htmlFor="value">Value:</label>
            <input type="number" min="0" step="1" name="chorevalue" value={value} onChange={(e) => setValue(e.target.value)}/>

            <input type="submit" value="Save"/>
        </form>
    )
}

ChoreForm.defaultProps = {
    initialValues: {
        id: 0,
        name: '',
        instructions: '',
        value: 0
    }
}


export default ChoreForm