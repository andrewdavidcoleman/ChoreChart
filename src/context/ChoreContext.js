import createDataContext from './createDataContext';

const choreReducer = (state, action) => {
  switch (action.type) {
    case 'add_Chore':
      return {
        amountSaved: state.amountSaved,
        chores: [
          ...state.chores, 
          { 
            id: Math.floor(Math.random() * 99999),
            name: action.payload.name,
            instructions: action.payload.instructions,
            value: action.payload.value
          }
        ]
      };
    case 'edit_Chore':
      return {
        amountSaved: state.amountSaved,
        chores: state.chores.map(chore => {
          return chore.id == action.payload.id ? action.payload : chore
        })
      }
    case 'delete_Chore':
        return {
          amountSaved: state.amountSaved,
          chores: state.chores.filter((chore) => chore.id !== action.payload)
        }
    default:
      return state;
  }
}

const addChore = dispatch => {
  return (name, instructions, value, callback) => {
    dispatch({ type: 'add_Chore', payload: { name, instructions, value } })
    callback()
  };
}

const editChore = dispatch => {
  return (id, name, instructions, value, callback) => {
    dispatch({ type: 'edit_Chore', payload: { id, name, instructions, value } })
    callback()
  };
}

const deleteChore = dispatch => {
  return (id) => {
    dispatch({ type: 'delete_Chore', payload: id })
  }
}

const increaseAmountSave = dispatch => {
  return (amount) => {
    dispatch({ type: 'increase_AmountSaved', payload: amount })
  }
}

const decreaseAmountSave = dispatch => {
  return (amount) => {
    dispatch({ type: 'decrease_AmountSaved', payload: amount })
  }
}

export const { Context, Provider } = createDataContext(
  choreReducer,
  { addChore, editChore, deleteChore },
  {
    amountSaved: 0,
    chores: [
      { name: 'Take trash to curb', instructions: 'Trash in the green can, recycling in blue. Replace the trash bag. Bags under the sinks', value: 2, id: 1 },
      { name: 'Unload dishwasher', instructions: 'When dishes are clean, put back in cabinets.', value: 2, id: 2 },
      { name: 'Clean room', instructions: 'Make bed. Put dirty clothes in basket. Pick up toys.', value: 3, id: 3 }
    ]
  }
)
