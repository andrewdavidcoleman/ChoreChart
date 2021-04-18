import React, { useContext } from 'react'
import ChoreForm from '../components/ChoreForm'
import { Context } from '../context/ChoreContext'
import { Redirect } from 'react-router-dom'

const AddChore = () => {
    const { addChore } = useContext(Context)

    return <ChoreForm onSubmit={(name, instructions, value) => {
        addChore(name, instructions, value, () => <Redirect to="/" /> )
    }}/>
}

export default AddChore