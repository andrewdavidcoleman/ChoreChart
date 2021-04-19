import React, { useContext } from 'react'
import { Context } from '../context/ChoreContext'
import ChoreForm from '../components/ChoreForm'
import { useHistory, useParams } from "react-router-dom"

const EditChore = () => {
    const history = useHistory()
    const { id } = useParams()
    const { state, editChore } = useContext(Context)
    const chore = state.chores.find(chore => chore.id == id)
    
    return <ChoreForm
        initialValues={{ id, name: chore.name, instructions: chore.instructions, value: chore.value}}
        onSubmit={(id, name, instructions, value) => {
            editChore(id, name, instructions, value, () => history.push('/'))
        }}
    />
}

export default EditChore