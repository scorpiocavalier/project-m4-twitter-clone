import React, { useContext } from 'react'
import styled from 'styled-components'
import Handle from './Handle'
import Timestamp from './Timestamp'
import { CurrentUserContext } from '../CurrentUserContext'

export default () => {
  const { currentUser } = useContext(CurrentUserContext)
  const {
    handle,
  } = currentUser

  return (
    <ColWrapper>
      <Handle handle={handle} />
    </ColWrapper>
  )
}

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const ColWrapper = styled.div`
  display: flex;
  flex-direction: col;
  border: 2px solid #f6f6f9;
`
