import React, { useContext } from 'react'
import { CurrentUserContext } from '../CurrentUserContext'
import styled from 'styled-components'
import { COLORS } from '../globalStyles'
import { LocationIcon, CalendarIcon } from '../Icons'
import Handle from './Handle'
import Tweet from './Tweet'
import Timestamp from './Timestamp'
import { ProfileAvatar } from './Avatar'

export default () => {
  const { currentUser } = useContext(CurrentUserContext)
  const {
    avatarSrc,
    bannerSrc,
    bio,
    displayName,
    handle,
    isBeingFollowedByYou,
    isFollowingYou,
    joined,
    location,
    numFollowers,
    numFollowing,
    numLikes,
  } = currentUser

  return (
    <MainColWrapper>
      <ProfileAvatar src={avatarSrc} size={'125px'} />
      <ColWrapper style={{ position: 'relative', top: '-131px' }}>
        <Banner src={bannerSrc} />
        <ColWrapper style={{ alignItems: 'flex-end', padding: '20px 15px' }}>
          <Button style={{ background: COLORS.primary }}>
            {isBeingFollowedByYou ? 'Following' : 'Follow'}
          </Button>
        </ColWrapper>
        <ProfileWrapper>
          <DisplayName className="titleFont">{displayName}</DisplayName>
          <RowWrapper style={{ alignItems: 'center' }}>
            <Handle handle={handle} />
            {isFollowingYou && <FollowingText>Follows you</FollowingText>}
          </RowWrapper>
          <StyledSpan>{bio}</StyledSpan>
          <RowWrapper>
            <StyledSpan>
              <LocationIcon />
              {location}
            </StyledSpan>
            <StyledSpan>
              <CalendarIcon />
              Joined <Timestamp timestamp={joined} />
            </StyledSpan>
          </RowWrapper>
          <RowWrapper>
            <StyledSpan>
              <Bold600>{numFollowing}</Bold600> Following
            </StyledSpan>
            <StyledSpan>
              <Bold600>{numFollowers}</Bold600> Followers
            </StyledSpan>
          </RowWrapper>
        </ProfileWrapper>
        {/* ActionBar Tweets/Media/Likes */}
        <ColWrapper>
          {/* List of tweets by the user */}
          <Tweet />
        </ColWrapper>
      </ColWrapper>
    </MainColWrapper>
  )
}

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const MainColWrapper = styled(ColWrapper)`
  border: 2px solid #f6f6f9;
`

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Banner = styled.img`
  width: 100%;
  height: 200px;
`

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const DisplayName = styled.span`
  font-size: 22px;
  margin-left: 15px;
`

const Button = styled.button`
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  width: 100px;
  padding: 10px 5px;
  border-radius: 17px;
`

const StyledSpan = styled.span`
  margin: 10px 15px;
`

const FollowingText = styled.span`
  background: #e8e9ef;
  border-radius: 5px;
  padding: 2px 5px;
  font-size: 80%;
  margin: 5px;
`

const Bold600 = styled.span`
  font-weight: 600;
`
