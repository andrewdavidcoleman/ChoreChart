import React, { useContext } from 'react'
import { Context } from '../context/ChoreContext'

const Dashboard = () => {
    const { state } = useContext(Context)

    return (
        <aside>
          <div>Amount saved: ${state.amountSaved}</div>
        </aside>
    )
}

export default Dashboard