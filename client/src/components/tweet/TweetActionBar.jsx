import React, { useReducer } from 'react'
import styled from 'styled-components'

import TweetAction from './TweetAction'
import {
  CommentIcon,
  RepeatIcon,
  HeartIcon,
  ShareIcon,
  CommentIcon2,
  RepeatIcon2,
  HeartIcon2,
  ShareIcon2,
} from '../Icons'

export const ACTION = {
  SET_TOGGLE: 'set-comment',
}

export default () => {
  const reducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
      case ACTION.TOGGLE_STATE:
        return {
          ...state,
          [payload.targetStateStr]: !state[payload.targetStateStr],
        }
      default:
        return state
    }
  }

  const initialState = {
    isCommented: false,
    isRetweeted: false,
    isLiked: false,
    isShared: false,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <RowWrapper>
      <TweetAction
        targetState={state.isCommented}
        targetStateStr={'isCommented'}
        dispatch={dispatch}
        icon1={<CommentIcon />}
        icon2={<CommentIcon2 />}
        hoverColor={'lightgreen'}
      />
      <TweetAction
        targetState={state.isRetweeted}
        targetStateStr={'isRetweeted'}
        dispatch={dispatch}
        icon1={<RepeatIcon />}
        icon2={<RepeatIcon2 />}
        hoverColor={'lightblue'}
      />
      <TweetAction
        targetState={state.isLiked}
        targetStateStr={'isLiked'}
        dispatch={dispatch}
        icon1={<HeartIcon />}
        icon2={<HeartIcon2 />}
        hoverColor={'salmon'}
      />
      <TweetAction
        targetState={state.isShared}
        targetStateStr={'isShared'}
        dispatch={dispatch}
        icon1={<ShareIcon />}
        icon2={<ShareIcon2 />}
        hoverColor={'lightblue'}
      />
    </RowWrapper>
  )
}

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
`
