import { useEffect } from 'react'
import { STATUS, ACTIONS } from '../constants'

const fetchData = async (dispatch) => {
  try {
    const res = await fetch('/api/me/profile')
    const data = await res.json()
    dispatch({ type: ACTIONS.SET_USER, payload: { user: data.profile } })
    dispatch({ type: ACTIONS.SET_STATUS, payload: { status: STATUS.IDLE } })
  } catch (error) {
    console.error(error)
  }
}

export const useLoadCurrentUser = (dispatch) => {
  useEffect(() => { fetchData(dispatch) }, [])
}