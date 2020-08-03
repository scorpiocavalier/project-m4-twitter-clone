import React from 'react'
import styled from 'styled-components'
import { CommentIcon, RepeatIcon, HeartIcon, ShareIcon } from '../Icons'

export default () => {
  return (
    <RowWrapper>
      <Action>
        <CommentIcon />
      </Action>
      <Action>
        <RepeatIcon />
      </Action>
      <Action>
        <HeartIcon />
      </Action>
      <Action>
        <ShareIcon />
      </Action>
    </RowWrapper>
  )
}

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 15px;
`

const Action = styled.button``
