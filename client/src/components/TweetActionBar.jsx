import React, { useState } from 'react'
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

export default () => {
  const [isCommented, setIsCommented] = useState(false)
  const [isRetweeted, setIsRetweeted] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isShared, setIsShared] = useState(false)

  return (
    <RowWrapper>
      <TweetAction
        state={isCommented}
        setState={setIsCommented}
        icon1={<CommentIcon />}
        icon2={<CommentIcon2 />}
      />
      <TweetAction
        state={isRetweeted}
        setState={setIsRetweeted}
        icon1={<RepeatIcon />}
        icon2={<RepeatIcon2 />}
      />
      <TweetAction
        state={isLiked}
        setState={setIsLiked}
        icon1={<HeartIcon />}
        icon2={<HeartIcon2 />}
      />
      <TweetAction
        state={isShared}
        setState={setIsShared}
        icon1={<ShareIcon />}
        icon2={<ShareIcon2 />}
      />
    </RowWrapper>
  )
}

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 15px;
`
