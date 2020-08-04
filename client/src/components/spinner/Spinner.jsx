import React from 'react'
import styled from 'styled-components'

import { SpinnerIcon } from '../Icons'

export default () => {
  return (
    <Wrapper>
      <SpinnerIcon />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding-top: 50px;
  text-align: center;
`