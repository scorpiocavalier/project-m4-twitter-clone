import React, { useContext } from 'react'
import styled from 'styled-components'
import { CurrentUserContext } from '../CurrentUserContext'
import Timestamp from './Timestamp'
import Avatar from './Avatar'
import Handle from './Handle'
import { RepeatIcon } from '../Icons'

export default ({ tweet }) => {
  const { currentUser } = useContext(CurrentUserContext)

  const {
    author: {
      avatarSrc,
      // bannerSrc,
      // bio,
      displayName,
      handle,
      // isBeingFollowedByYou,
      // isFollowingYou,
      // joined,
      // location,
      // numFollowers,
      // numFollowing,
      //numLikes,
    },
    // id,
    // isLiked,
    isRetweeted,
    media, // array {type: 'img', url: '...jpeg'}
    // numLikes,
    // numRetweets,
    status,
    timestamp,
  } = tweet
  return (
    <ColTweetWrapper>
      {isRetweeted && (
        <RowRetweetWrapper>
          <RepeatIcon />
          {currentUser.displayName} Remeowed
        </RowRetweetWrapper>
      )}
      <RowWrapper>
        <Avatar src={avatarSrc} />
        <ColWrapper>
          <RowWrapper>
            <BoldText>{displayName}</BoldText>
            <Handle handle={handle} />
            {`·`}
            <Timestamp timestamp={timestamp} />
          </RowWrapper>
          <p>{status}</p>
        </ColWrapper>
      </RowWrapper>
      <ColMediaWrapper>
        {media.length ? <MediaWrapper src={media[0].url} /> : null}
        <div style={{ width: '100%', background: 'lightgreen' }}>
          ACTION BAR
        </div>
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
