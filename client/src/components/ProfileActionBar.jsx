import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../globalStyles'

export default () => {
  return (
    <RowWrapper>
      <Action active="true">Tweets</Action>
      <Action>Media</Action>
      <Action>Likes</Action>
    </RowWrapper>
  )
}

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Action = styled.button`
  padding: 20px 0;
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  color: ${p => p.active && COLORS.primary};
  border-bottom: ${p => p.active && `3px solid ${COLORS.primary}`};
`