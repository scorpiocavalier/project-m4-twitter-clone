import { useEffect } from 'react'
import { STATUS, ACTIONS } from '../constants'

export const useLoadCurrentUser = (dispatch) => {
  useEffect(() => {
    fetch('/api/me/profile')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_USER, payload: { user: data.profile } })
        dispatch({ type: ACTIONS.SET_STATUS, payload: { status: STATUS.IDLE } })
      })
  }, [])
}