import React from 'react'
import ChoreForm from '../components/ChoreForm'
import { Context } from '../context/ChoreContext'
import { useHistory } from 'react-router-dom'
import api from '../api'

const AddChore = () => {
    const history = useHistory();

    const handleSubmit = async (id, name, instructions, value) => {
        api.post('/', {id, name, instructions, value: ~~value})
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

    return <ChoreForm onSubmit={handleSubmit}/>
}

export default AddChore