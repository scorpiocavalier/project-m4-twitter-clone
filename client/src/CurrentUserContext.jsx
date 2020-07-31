import React, { createContext, useReducer, useEffect } from 'react'

export const CurrentUserContext = createContext(null)

export const STATUS = {
  LOADING: 'loading',
  IDLE: 'idle',
}

export const ACTIONS = {
  SET_USER: 'set-user',
  SET_STATUS: 'set-status',
}

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

  useEffect(() => {
    fetch('/api/me/profile')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_USER, payload: { user: data.profile } })
        dispatch({ type: ACTIONS.SET_STATUS, payload: { status: STATUS.IDLE } })
      })
  }, [])

  return (
    <CurrentUserContext.Provider value={state}>
      {children}
    </CurrentUserContext.Provider>
  )
}

export default CurrentUserProvider
