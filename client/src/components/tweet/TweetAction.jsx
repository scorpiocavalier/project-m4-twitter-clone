import React, { useState } from 'react'
import styled from 'styled-components'
import { ACTION } from './TweetActionBar'

export default ({
  targetState,
  targetStateStr,
  dispatch,
  icon1,
  icon2,
  hoverColor,
  setRetweeted = null,
}) => {
  const [count, setCount] = useState(null)

  return (
    <Wrapper>
      <Action
        onClick={(e) => {
          dispatch({ type: ACTION.TOGGLE_STATE, payload: { targetStateStr } })
          setCount(!count ? 1 : null)
          setRetweeted && setRetweeted((prevVal) => !prevVal)
        }}
        hoverColor={hoverColor}
      >
        {targetState ? icon2 : icon1}
      </Action>
      <Counter>{count}</Counter>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Action = styled.button`
  display: flex;
  padding: 10px;
  &:hover {
    background: ${(p) => p.hoverColor};
    border-radius: 50%;
  }
`

const Counter = styled.span`
  font-size: 20px;
  text-align: center;
  width: 25px;
  height: 25px;
`
