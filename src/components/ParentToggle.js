import React, { useContext } from 'react'
import { Context } from '../context/ChoreContext'
import Toggle from 'react-toggle'

const ParentToggle = () => {
    const { state, setParentMode } = useContext(Context)

    return (<label>
        <span>Child</span>
        <Toggle
          defaultChecked={state.isParentMode}
          icons={false}
          onChange={(e) => setParentMode(e.target.checked)} 
        />
        <span>Parent</span>
      </label>
    )
}

export default ParentToggle