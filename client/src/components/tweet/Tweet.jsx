import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import TweetActionBar from './TweetActionBar'
import TweetHandle from './TweetHandle'
import Avatar from '../Avatar'
import Timestamp, { Time, MonthDayYear } from '../Timestamp'
import { RepeatIconSmall } from '../Icons'
import { CurrentUserContext } from '../CurrentUserContext'

export default ({ tweet }) => {
  const { state } = useContext(CurrentUserContext)

  const {
    author: { avatarSrc, displayName, handle },
    id,
    isRetweeted,
    media,
    status,
    timestamp,
  } = tweet

  const history = useHistory()

  const handleUsernameClick = () => {
    history.push(`/profile`)
  }

  const handleCardClick = () => {
    history.push(`/tweet/${id}`)
  }

  const [retweeted, setRetweeted] = useState(isRetweeted)

  return (
    <ColTweetWrapper tabIndex="0" aria-label="Tweet">
      {retweeted && (
        <RowRetweetWrapper>
          <RepeatIconSmall />
          {state.currentUser.displayName} Remeowed
        </RowRetweetWrapper>
      )}
      <RowWrapper>
        <Avatar src={avatarSrc} />
        <ColWrapper>
          <RowWrapper>
            <BoldText
              tabIndex="0"
              aria-label={displayName}
              onClick={handleUsernameClick}
              style={{ cursor: 'pointer' }}
            >
              {displayName}
            </BoldText>
            <TweetHandle handle={handle} />
            {`·`}
            <Timestamp timestamp={timestamp} />
          </RowWrapper>
          <p
            tabIndex="0"
            onClick={handleCardClick}
            style={{ cursor: 'pointer' }}
          >
            {status}
          </p>
        </ColWrapper>
      </RowWrapper>
      <ColMediaWrapper>
        {media.length ? <MediaWrapper src={media[0].url} /> : null}
        <TweetActionBar setRetweeted={setRetweeted} />
      </ColMediaWrapper>
    </ColTweetWrapper>
  )
}

export const SingleTweetView = ({ tweet }) => {
  const { state } = useContext(CurrentUserContext)

  const {
    author: { avatarSrc, displayName, handle },
    id,
    isRetweeted,
    media,
    status,
    timestamp,
  } = tweet

  const history = useHistory()

  const handleUsernameClick = () => {
    history.push(`/profile`)
  }

  const handleCardClick = () => {
    history.push(`/tweet/${id}`)
  }

  return (
    <ColTweetWrapper tabIndex="0" aria-label="Tweet">
      {isRetweeted && (
        <RowRetweetWrapper>
          <RepeatIconSmall />
          {state.currentUser.displayName} Remeowed
        </RowRetweetWrapper>
      )}

      <RowWrapper>
        <Avatar src={avatarSrc} />
        <ColWrapper>
          <BoldText
            tabIndex="0"
            aria-label={displayName}
            onClick={handleUsernameClick}
            style={{ cursor: 'pointer' }}
          >
            {displayName}
          </BoldText>
          <TweetHandle handle={handle} />
        </ColWrapper>
      </RowWrapper>

      <RowWrapper>
        <Status>{status}</Status>
      </RowWrapper>

      {media.length ? <MediaWrapper src={media[0].url} /> : null}

      <TimestampWrapper>
        <Time timestamp={timestamp} />
        {`·`}
        <MonthDayYear timestamp={timestamp} />
        {`·`}
        <Source>Critter web app</Source>
      </TimestampWrapper>

      <TweetActionBar />
    </ColTweetWrapper>
  )
}

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
`

const RowRetweetWrapper = styled(RowWrapper)`
  margin-left: 65px;
`

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ColTweetWrapper = styled(ColWrapper)`
  border-top: 2px solid #f6f6f9;
  padding: 15px;
`

const ColMediaWrapper = styled(ColWrapper)`
  margin-left: 90px;
`

const MediaWrapper = styled.img`
  border-radius: 3%;
  width: 100%;
`

const BoldText = styled.span`
  font-weight: 600;
`

const TimestampWrapper = styled(RowWrapper)`
  font-size: 20px;
  padding: 10px 0 20px 0;
  border-bottom: 1px solid #e8e9ef;
`

const Status = styled.span`
  font-size: 24px;
  padding: 10px 0;
`

const Source = styled.span`
  margin: 0 5px;
`
