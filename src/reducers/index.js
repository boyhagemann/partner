import { RELOAD, LOAD, SUCCESS, ERROR } from '../epics'

const initialState = {
  status: null,
  data: []
}

export const componentsReducer = (state = initialState, action) => {

  switch(action.type) {

    case RELOAD:
      return { ...state, status: 'reload' }

    case LOAD:
      if(state.status === 'success') return state
      return { ...state, status: 'loading' }

    case SUCCESS:
      const { response } = action.payload
      return { ...state, data: response.data, status: 'success' }

    case ERROR:
      return { ...state, status: 'error' }

    default:
      return state
  }
}
