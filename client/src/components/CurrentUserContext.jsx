import React, { createContext, useReducer, useEffect } from 'react'

import { STATUS, ACTIONS } from '../constants'

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

  useEffect(() => {
    const fetchProfileUserData = async () => {
      try {
        const res = await fetch('/api/me/profile')
        const data = await res.json()
        dispatch({ type: ACTIONS.SET_USER, payload: { user: data.profile } })
        dispatch({ type: ACTIONS.SET_STATUS, payload: { status: STATUS.IDLE } })
      } catch (error) {
        console.error(error)
      }
    }
    fetchProfileUserData()
  }, [dispatch])

  return (
    <CurrentUserContext.Provider value={state}>
      {children}
    </CurrentUserContext.Provider>
  )
}

export default CurrentUserProvider