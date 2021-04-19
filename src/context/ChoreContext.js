import createDataContext from './createDataContext';

const choreReducer = (state, action) => {
  switch (action.type) {
    case 'addChore':
      return {
        isParentMode: state.isParentMode,
        amountSaved: state.amountSaved,
        chores: [
          ...state.chores, 
          { 
            id: Math.floor(Math.random() * 99999),
            name: action.payload.name,
            instructions: action.payload.instructions,
            value: action.payload.value,
            days: [
              { name: 'monday', status: 'unchecked'},
              { name: 'tuesday', status: 'unchecked'},
              { name: 'wednesday', status: 'unchecked'},
              { name: 'thursday', status: 'unchecked'},
              { name: 'friday', status: 'unchecked'},
              { name: 'saturday', status: 'unchecked'},
              { name: 'sunday', status: 'unchecked'},
            ]
          }
        ]
      };
    case 'editChore':
      return {
        isParentMode: state.isParentMode,
        amountSaved: state.amountSaved,
        chores: state.chores.map(chore => {
          return chore.id == action.payload.id ? Object.assign(chore, action.payload) : chore
        })
      }
    case 'deleteChore':
      return {
        isParentMode: state.isParentMode,
        amountSaved: state.amountSaved,
        chores: state.chores.filter((chore) => chore.id !== action.payload)
      }
    case 'increaseAmountSaved':
      return {
        isParentMode: state.isParentMode,
        amountSaved: state.amountSaved + parseInt(action.payload),
        chores: state.chores
      }
    case 'decreaseAmountSaved':
      return {
        isParentMode: state.isParentMode,
        amountSaved: state.amountSaved - parseInt(action.payload),
        chores: state.chores
      }
    case 'setCheckCircleStatus':
      return {
        isParentMode: state.isParentMode,
        amountSaved: state.amountSaved,
        chores: state.chores.map(chore => {
          return chore.id == action.payload.choreId 
          ? Object.assign(chore, {
            days: chore.days.map(day => {
              return day.name === action.payload.day ? { name: action.payload.day, status: action.payload.status } : day
            })
          }) 
          : chore
        })
      }
    case 'setParentMode':
      return {
        isParentMode: action.payload.isParentMode,
        amountSaved: state.amountSaved,
        chores: state.chores
      }
    default:
      return state;
  }
}

const addChore = dispatch => {
  return (name, instructions, value, callback) => {
    dispatch({ type: 'addChore', payload: { name, instructions, value } })
    callback()
  };
}

const editChore = dispatch => {
  return (id, name, instructions, value, callback) => {
    dispatch({ type: 'editChore', payload: { id, name, instructions, value } })
    callback()
  };
}

const deleteChore = dispatch => {
  return (id) => {
    dispatch({ type: 'deleteChore', payload: id })
  }
}

const increaseAmountSaved = dispatch => {
  return (amount) => {
    dispatch({ type: 'increaseAmountSaved', payload: amount })
  }
}

const decreaseAmountSaved = dispatch => {
  return (amount) => {
    dispatch({ type: 'decreaseAmountSaved', payload: amount })
  }
}

const setCheckCircleStatus = dispatch => {
  return (choreId, day, status) => {
    dispatch({ type: 'setCheckCircleStatus', payload: { choreId, day, status } })
  }
}

const setParentMode = dispatch => {
  return (isParentMode) => {
    dispatch({ type: 'setParentMode', payload: { isParentMode } })
  }
}

export const { Context, Provider } = createDataContext(
  choreReducer,
  { addChore, editChore, deleteChore, increaseAmountSaved, decreaseAmountSaved, setCheckCircleStatus, setParentMode },
  {
    isParentMode: true,
    amountSaved: 0,
    chores: [
      { 
        name: 'Take out trash', 
        instructions: 'Trash in the green can, recycling in blue. Replace the trash bag. Bags under the sink.', 
        value: 1, 
        id: 1,
        days: [
          { name: 'monday', status: 'unchecked'},
          { name: 'tuesday', status: 'unchecked'},
          { name: 'wednesday', status: 'unchecked'},
          { name: 'thursday', status: 'unchecked'},
          { name: 'friday', status: 'unchecked'},
          { name: 'saturday', status: 'unchecked'},
          { name: 'sunday', status: 'unchecked'},
        ]
      },
      { 
        name: 'Unload dishwasher', 
        instructions: 'When dishes are clean, put back in cabinets.', 
        value: 2, 
        id: 2,
        days: [
          { name: 'monday', status: 'unchecked'},
          { name: 'tuesday', status: 'unchecked'},
          { name: 'wednesday', status: 'unchecked'},
          { name: 'thursday', status: 'unchecked'},
          { name: 'friday', status: 'unchecked'},
          { name: 'saturday', status: 'unchecked'},
          { name: 'sunday', status: 'unchecked'},
        ]
      },
      { 
        name: 'Clean room', 
        instructions: 'Make bed. Put dirty clothes in basket. Pick up toys.', 
        value: 3, 
        id: 3,
        days: [
          { name: 'monday', status: 'unchecked'},
          { name: 'tuesday', status: 'unchecked'},
          { name: 'wednesday', status: 'unchecked'},
          { name: 'thursday', status: 'unchecked'},
          { name: 'friday', status: 'unchecked'},
          { name: 'saturday', status: 'unchecked'},
          { name: 'sunday', status: 'unchecked'},
        ]
      }
    ]
  }
)
