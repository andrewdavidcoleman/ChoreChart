import createDataContext from './createDataContext';

const choreReducer = (state, action) => {
  switch (action.type) {
    case 'add_Chore':
      return [
            ...state, 
            { 
              id: Math.floor(Math.random() * 99999),
              name: action.payload.name,
              instructions: action.payload.instructions,
              value: action.payload.value
            }
        ];
    case 'delete_Chore':
        return state.filter((Chore) => Chore.id !== action.payload)
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

const deleteChore = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_Chore', payload: id })
    }
}

export const { Context, Provider } = createDataContext(
  choreReducer,
  { addChore, deleteChore },
  [
    { name: 'Take trash to curb', instructions: 'Do some chore', value: 1, id: 1 },
    { name: 'Unload dishwasher', instructions: 'Do some other chore', value: 2, id: 2 },
    { name: 'Clean room', instructions: 'Do some other chore', value: 3, id: 3 }
  ]
)
