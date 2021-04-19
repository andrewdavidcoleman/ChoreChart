import React, { useContext } from 'react'
import ChoreForm from '../components/ChoreForm'
import { Context } from '../context/ChoreContext'
import { useHistory } from "react-router-dom"

const AddChore = () => {
    const { addChore } = useContext(Context)
    const history = useHistory();

    return <ChoreForm onSubmit={(id, name, instructions, value) => {
        addChore(name, instructions, value, () => history.push('/'))
    }}/>
}

export default AddChore