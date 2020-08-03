import React, { useState } from 'react'
import styled from 'styled-components'
import {
  CommentIcon,
  RepeatIcon,
  HeartIcon,
  ShareIcon,
  LikedHeartIcon,
} from '../Icons'

export default () => {
  // const [isCommented, setIsCommented] = useState(false)
  // const [isRetweeted, setIsRetweeted] = useState(false)
  // const [ isShared, setIsShared ] = useState(false)
  
  const [isLiked, setIsLiked] = useState(false)
  const [numLikes, setNumLikes] = useState(0)

  return (
    <RowWrapper>
      <Action>
        <CommentIcon />
      </Action>
      <Action>
        <RepeatIcon />
      </Action>
      <Action onClick={ e => {
        setIsLiked(!isLiked)
        setNumLikes(prevVal => prevVal === 0 ? 1 : 0)
      }
      }>
        { isLiked ? <LikedHeartIcon /> : <HeartIcon /> }
        { numLikes === 1 && <Counter>1</Counter>}
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

const Action = styled.button`
  display: flex;
`

const Counter = styled.span`
  font-size: 22px;
  margin-left: 10px;
`