import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ChoreForm = ({ onSubmit, initialValues }) => {
    const [id, setId] = useState(initialValues.id)
    const [name, setName] = useState(initialValues.name)
    const [instructions, setInstructions] = useState(initialValues.instructions)
    const [value, setValue] = useState(initialValues.value)

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            onSubmit(id, name, instructions, value)
        }}>
            <Link to="/">
                <i className="fas fa-chevron-left"></i>
            </Link>
            <label htmlFor="name">Name:</label>
            <input type="text" name="chorename" value={name} onChange={(e) => setName(e.target.value)}/>

            <label htmlFor="instructions">Instructions:</label>
            <textarea name="choreinstructions" value={instructions} onChange={(e) => setInstructions(e.target.value)}/>

            <label htmlFor="value">Value:</label>
            <input type="text" name="chorevalue" value={value} onChange={(e) => setValue(e.target.value)}/>

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