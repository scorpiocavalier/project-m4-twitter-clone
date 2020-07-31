import React, { createContext, useReducer } from 'react'
import { useLoadCurrentUser } from './hooks/useLoadCurrentUser'
import { STATUS, ACTIONS } from './constants'

export const CurrentUserContext = createContext(null)

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER:
      return { ...state, currentUser: action.payload.user }
    case ACTIONS.SET_STATUS:
      return { ...state, status: action.payload.status }
    default:
      return state
  }
}

const CurrentUserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    currentUser: null,
    status: STATUS.LOADING,
  })

  useLoadCurrentUser(dispatch)

  return (
    <CurrentUserContext.Provider value={state}>
      {children}
    </CurrentUserContext.Provider>
  )
}

export default CurrentUserProvider