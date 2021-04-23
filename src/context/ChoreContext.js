import createDataContext from './createDataContext';

const choreReducer = (state, action) => {
  switch (action.type) {
    case 'setAmountSaved':
      return {
        isParentMode: state.isParentMode,
        amountSaved: action.payload,
        chores: state.chores
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

const initialState = {
  isParentMode: true,
  amountSaved: 0
}

const setAmountSaved = dispatch => {
  return (amount) => {
    dispatch({ type: 'setAmountSaved', payload: amount })
  }
}

const setParentMode = dispatch => {
  return (isParentMode) => {
    dispatch({ type: 'setParentMode', payload: { isParentMode } })
  }
}

export const { Context, Provider } = createDataContext(
  choreReducer,
  { setAmountSaved, setParentMode },
  initialState
)
