import React, { useContext, useState, useEffect } from 'react'
import { CurrentUserContext } from '../CurrentUserContext'
import Tweet from './Tweet'
import styled from 'styled-components'

export default () => {
  const { currentUser } = useContext(CurrentUserContext)
  const { handle } = currentUser
  const [feed, setFeed] = useState({})

  useEffect(() => {
    const fetchProfileFeed = async () => {
      const res = await fetch(`/api/${handle}/feed`)
      const { tweetsById } = await res.json()
      setFeed({ ...tweetsById })
    }
    fetchProfileFeed()
  }, [handle])

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
