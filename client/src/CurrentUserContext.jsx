import React, { createContext, useState, useEffect } from 'react'

export const CurrentUserContext = createContext(null)

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    fetch('http://localhost:31415/api/me/profile')
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data.profile)
        setStatus('idle')
      })
  }, [])

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  )
}

export default CurrentUserProvider
