import React from 'react'
import styled from 'styled-components'

import TweetFeed from '../tweet/TweetFeed'
import { NewPostArea } from './NewPostArea'

export const Homefeed = ({ feed }) => {
  return (
    <MainWrapper>
      <NewPostArea />
      <TweetFeed feed={feed} />
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`