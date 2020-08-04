import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { BombIcon } from '../Icons'

export default () => {
  return (
    <ColWrapper>
      <BombIcon />
      <Heading>An unknown error has occurred.</Heading>
      <Message>
        Please try refreshing the page, or <StyledLink to="/">contact support</StyledLink>{' '}
        if the problem persists.
      </Message>
    </ColWrapper>
  )
}

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  width: 100%;
`

const Heading = styled.h1`
  padding: 15px;
`

const Message = styled.p`
  padding: 10px;
`

const StyledLink = styled(Link)`
  text-decoration: underline;
`