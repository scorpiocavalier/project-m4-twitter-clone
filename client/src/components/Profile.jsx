import React, { useContext } from 'react'
import { CurrentUserContext } from '../CurrentUserContext'

export default () => {
  const { currentUser, status } = useContext(CurrentUserContext)

  return <div>{currentUser.displayName}</div>
}
