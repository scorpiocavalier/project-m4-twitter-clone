import React, { useState } from 'react'
import styled from 'styled-components'

export default ({ state, setState, icon1, icon2, hoverColor }) => {
  const [count, setCount] = useState(0)

  return (
    <Wrapper>
      <Action
        onClick={(e) => {
          setState(!state)
          setCount(!count ? 1 : 0)
        }}
        hoverColor={hoverColor}
      >
        {state ? icon2 : icon1}
      </Action>
      {state && <Counter>1</Counter>}
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
  font-size: 22px;
  padding-left: 5px;
`
