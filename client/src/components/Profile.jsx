import React, { useContext } from 'react'
import moment from 'moment'
import { CurrentUserContext } from '../CurrentUserContext'
import styled from 'styled-components'
import { COLORS } from '../globalStyles'
import { LocationIcon, CalendarIcon } from '../Icons'

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

  const date = moment(joined)
  const monthYear = date.format('MMMM YYYY')

  return (
    <MainColWrapper>
      <Avatar src={avatarSrc} />
      <ColWrapper style={{ position: 'relative', top: '-131px' }}>
        <Banner src={bannerSrc} />
        <ColWrapper style={{ alignItems: 'flex-end', padding: '20px 15px' }}>
          <Button style={{ background: COLORS.primary }}>
            {isBeingFollowedByYou ? 'Following' : 'Follow'}
          </Button>
        </ColWrapper>
        <ProfileWrapper>
          <Handle className="titleFont">{displayName}</Handle>
          <RowWrapper style={{ alignItems: 'center' }}>
            <SmallText>@{handle}</SmallText>
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
              Joined {monthYear}
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

const Avatar = styled.img`
  width: 125px;
  border-radius: 50%;
  border: 3px solid white;
  position: relative;
  top: 135px;
  left: 15px;
  z-index: 1;
`

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Handle = styled.span`
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

const SmallText = styled.span`
  font-size: 90%;
  margin: 5px 0 5px 15px;
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
