import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import TweetActionBar from './TweetActionBar'
import TweetHandle from './TweetHandle'
import Avatar from '../Avatar'
import Timestamp from '../Timestamp'
import { RepeatIconSmall } from '../Icons'
import { CurrentUserContext } from '../CurrentUserContext'

export default ({ tweet }) => {
  const { currentUser } = useContext(CurrentUserContext)

  const {
    author: { avatarSrc, displayName, handle },
    isRetweeted,
    media,
    status,
    timestamp,
  } = tweet

  console.log(currentUser)

  return (
    <ColTweetWrapper tabIndex="0" aria-label="Tweet">
      {isRetweeted && (
        <RowRetweetWrapper>
          <RepeatIconSmall />
          {currentUser.displayName} Remeowed
        </RowRetweetWrapper>
      )}
      <Button to="/profile">
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
  &:hover {
    color: black;
  }
`
