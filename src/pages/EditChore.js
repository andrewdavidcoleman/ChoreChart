import React, { useState } from 'react'
import { Context } from '../context/ChoreContext'
import ChoreForm from '../components/ChoreForm'
import { useHistory, useParams } from 'react-router-dom'
import api from '../api'

const EditChore = () => {
    const history = useHistory()
    const { id } = useParams()
    console.log(id);

    const handleSubmit = async (id, name, instructions, value) => {
        api.put('/', {id, name, instructions, value: ~~value})
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error.message);
        })
        .finally(() => {
            history.push('/ChoreChart')
        })
    }

    return <ChoreForm
        onSubmit={handleSubmit}
        initialId={id}
    />
}

export default EditChore