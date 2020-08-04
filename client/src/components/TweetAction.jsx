import React, { useState } from 'react'
import styled from 'styled-components'

export default ({ state, setState, icon1, icon2 }) => {
  const [count, setCount] = useState(0)

  return (
    <Action
      onClick={(e) => {
        setState(!state)
        setCount(!count ? 1 : 0)
      }}
    >
      {state ? <>{icon2}<Counter>1</Counter></> : icon1}
    </Action>
  )
}

const Action = styled.button`
  display: flex;
`

const Counter = styled.span`
  font-size: 22px;
  margin-left: 10px;
`
