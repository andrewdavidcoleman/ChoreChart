import React, { useContext, useEffect } from 'react'
import { Context } from '../context/ChoreContext'
import api from '../api'

const Dashboard = () => {
    const { state, setAmountSaved } = useContext(Context)

    useEffect(() => {
        //TODO: Must be a better way
        api.get('/gettotal')
        .then((response) => {
            setAmountSaved(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <aside>
          <div>Amount saved: ${state.amountSaved}</div>
        </aside>
    )
}

export default Dashboard