import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { CurrentUserContext } from '../CurrentUserContext'
import { STATUS, setStatus } from '../../actions'
import { SingleTweetView } from './Tweet'
import Spinner from '../spinner/Spinner'

export default () => {
  const { state, dispatch } = useContext(CurrentUserContext)
  const [tweet, setTweet] = useState(null)
  const { tweetId } = useParams()


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/tweet/${tweetId}`)
        const tweetData = await res.json()
        setTweet(tweetData.tweet)
      } catch (error) {
        dispatch(setStatus(STATUS.ERROR))
      }
    }
    fetchData()
  }, [tweetId, dispatch])

  return <div>{tweet ? <SingleTweetView tweet={tweet} /> : <Spinner />}</div>
}
