import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import ProfileActionBar from './ProfileActionBar'
import TweetHandle from '../tweet/TweetHandle'
import TweetFeed from '../tweet/TweetFeed'
import Timestamp from '../Timestamp'
import { CurrentUserContext } from '../CurrentUserContext'
import { LocationIcon, CalendarIcon } from '../Icons'
import { ProfileAvatar } from '../Avatar'
import { COLORS } from '../../globalStyles'

export default () => {
  const {
    state: { currentUser, profileFeed },
  } = useContext(CurrentUserContext)

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
  } = currentUser

  return (
    <MainColWrapper>
      <ProfileAvatar src={avatarSrc} size={'125px'} />
      <ColWrapper style={{ position: 'relative', top: '-133px' }}>
        <Banner src={bannerSrc} />
        <ColWrapper style={{ alignItems: 'flex-end', padding: '20px 15px' }}>
          <Button
            className="btn-with-shadow"
            style={{ background: COLORS.primary }}
            tabIndex="0"
            aria-label="Follow Button"
          >
            {isBeingFollowedByYou ? 'Following' : 'Follow'}
          </Button>
        </ColWrapper>
        <ProfileWrapper>
          <DisplayName className="titleFont">{displayName}</DisplayName>
          <RowWrapper style={{ marginLeft: '10px' }}>
            <TweetHandle handle={handle} />
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
              Joined
              <Timestamp timestamp={joined} />
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
        <ProfileActionBar />
        {currentUser && (
          <ColWrapper>
            <TweetFeed feed={profileFeed} />
          </ColWrapper>
        )}
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
