import React, { createContext, useReducer, useEffect } from 'react'

import { STATUS, ACTIONS, setState, setStatus } from '../actions'

export const CurrentUserContext = createContext(null)

const initialState = {
  status: STATUS.LOADING,
  currentUser: null,
  homeFeed: null,
  profileFeed: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_STATUS:
      return { ...state, status: action.payload.status }
    case ACTIONS.SET_STATE:
      return { ...state, ...action.payload.newState }
    default:
      return state
  }
}

const CurrentUserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchAllData = async () => {
    try {
      // Current User Data
      const userRes = await fetch('/api/me/profile')
      const { profile: currentUser } = await userRes.json()
      // Profile Feed
      const profileRes = await fetch(`/api/${currentUser.handle}/feed`)
      const { tweetsById: profileFeed } = await profileRes.json()
      // Home Feed
      const homeRes = await fetch('/api/me/home-feed')
      const { tweetsById: homeFeed } = await homeRes.json()
      // Dispatch all
      const newState = {
        currentUser,
        profileFeed,
        homeFeed,
        status: STATUS.IDLE,
      }
      dispatch(setState(newState))
    } catch (error) {
      dispatch(setStatus(STATUS.ERROR))
    }
  }

  useEffect(() => fetchAllData(), [])

  return (
    <CurrentUserContext.Provider value={state}>
      {children}
    </CurrentUserContext.Provider>
  )
}

export default CurrentUserProvider
