import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Tweet from '../tweet/Tweet'

export default () => {
  const [feed, setFeed] = useState({})

  useEffect(() => {
    const fetchHomeFeed = async () => {
      const res = await fetch('/api/me/home-feed')
      const { tweetsById } = await res.json()
      setFeed({...tweetsById})
    }
    fetchHomeFeed()
  }, [])

  return (
    <TweetFeedWrapper>
      { feed &&
        Object.values(feed).map((tweet, index) => {
          return <Tweet key={ index } tweet={ tweet } />
        })
      }
    </TweetFeedWrapper>
  )
}

const TweetFeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
`