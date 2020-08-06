import React, { useContext } from 'react'
import styled from 'styled-components'

import Tweet from './Tweet'

export default ({ feed }) => {
  return (
    <TweetFeedWrapper>
      {feed &&
        Object.values(feed).map((tweet, index) => {
          return <Tweet key={index} tweet={tweet} />
        })}
    </TweetFeedWrapper>
  )
}

const TweetFeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
`