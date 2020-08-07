import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { setStatus, STATUS } from '../../actions'
import TweetActionBar from './TweetActionBar'
import TweetHandle from './TweetHandle'
import Avatar from '../Avatar'
import Timestamp, { Time, MonthDayYear } from '../Timestamp'
import { RepeatIconSmall } from '../Icons'
import { CurrentUserContext } from '../CurrentUserContext'

export default ({ tweet }) => {
  const { state, dispatch } = useContext(CurrentUserContext)

  const {
    author: { avatarSrc, displayName, handle },
    id,
    isRetweeted,
    media,
    status,
    timestamp,
  } = tweet

  return (
    <ColTweetWrapper tabIndex="0" aria-label="Tweet">
      {isRetweeted && (
        <RowRetweetWrapper>
          <RepeatIconSmall />
          {state.currentUser.displayName} Remeowed
        </RowRetweetWrapper>
      )}
      <Button
        to={`/tweet/${id}`}
        onClick={() => dispatch(setStatus(STATUS.LOADING))}
      >
        <RowWrapper>
          <Avatar src={avatarSrc} />
          <ColWrapper>
            <RowWrapper>
              <BoldText tabIndex="0" aria-label={displayName}>
                {displayName}
              </BoldText>
              <TweetHandle handle={handle} />
              {`·`}
              <Timestamp timestamp={timestamp} />
            </RowWrapper>
            <p>{status}</p>
          </ColWrapper>
        </RowWrapper>
      </Button>
      <ColMediaWrapper>
        {media.length ? <MediaWrapper src={media[0].url} /> : null}
        <TweetActionBar />
      </ColMediaWrapper>
    </ColTweetWrapper>
  )
}

export const SingleTweetView = ({ tweet }) => {
  const { state, dispatch } = useContext(CurrentUserContext)

  const {
    author: { avatarSrc, displayName, handle },
    id,
    isRetweeted,
    media,
    status,
    timestamp,
  } = tweet

  return (
    <ColTweetWrapper tabIndex="0" aria-label="Tweet">
      {isRetweeted && (
        <RowRetweetWrapper>
          <RepeatIconSmall />
          {state.currentUser.displayName} Remeowed
        </RowRetweetWrapper>
      )}

      <Button
        to={`/tweet/${id}`}
        onClick={() => dispatch(setStatus(STATUS.LOADING))}
      >
        <RowWrapper>
          <Avatar src={avatarSrc} />
          <ColWrapper>
            <BoldText tabIndex="0" aria-label={displayName}>
              {displayName}
            </BoldText>
            <TweetHandle handle={handle} />
          </ColWrapper>
        </RowWrapper>

        <RowWrapper>
          <Status>{status}</Status>
        </RowWrapper>
      </Button>

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

const Button = styled(Link)`
  color: black;
  &:hover {
    color: black;
  }
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
