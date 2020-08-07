import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import ProfileActionBar from './ProfileActionBar'
import TweetHandle from '../tweet/TweetHandle'
import Timestamp from '../Timestamp'
import Spinner from '../spinner/Spinner'
import { CurrentUserContext } from '../CurrentUserContext'
import { LocationIcon, CalendarIcon } from '../Icons'
import { ProfileAvatar } from '../Avatar'
import { STATUS, setStatus } from '../../actions'
import { COLORS } from '../../globalStyles'

export default () => {
  const {dispatch} = useContext(CurrentUserContext)
  const [profileUser, setProfileUser] = useState(null)
  const { handle } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/${handle}/profile`)
        const user = await res.json()
        setProfileUser(user.profile)
      } catch (error) {
        dispatch(setStatus(STATUS.ERROR))
      }
    }
    fetchData()
  }, [setProfileUser])

  return (
    <MainColWrapper>
      {profileUser ? (
        <>
          <ProfileAvatar src={profileUser.avatarSrc} size={'125px'} />
          <ColWrapper style={{ position: 'relative', top: '-133px' }}>
            <Banner src={profileUser.bannerSrc} />
            <ColWrapper
              style={{ alignItems: 'flex-end', padding: '20px 15px' }}
            >
              <Button
                className="btn-with-shadow"
                style={{ background: COLORS.primary }}
                tabIndex="0"
                aria-label="Follow Button"
              >
                {profileUser.isBeingFollowedByYou ? 'Following' : 'Follow'}
              </Button>
            </ColWrapper>
            <ProfileWrapper>
              <DisplayName className="titleFont">
                {profileUser.displayName}
              </DisplayName>
              <RowWrapper style={{ marginLeft: '10px' }}>
                <TweetHandle handle={profileUser.handle} />
                {profileUser.isFollowingYou && (
                  <FollowingText>Follows you</FollowingText>
                )}
              </RowWrapper>
              <StyledSpan>{profileUser.bio}</StyledSpan>
              <RowWrapper>
                <StyledSpan>
                  <LocationIcon />
                  {profileUser.location}
                </StyledSpan>
                <StyledSpan>
                  <CalendarIcon />
                  Joined
                  <Timestamp timestamp={profileUser.joined} />
                </StyledSpan>
              </RowWrapper>
              <RowWrapper>
                <StyledSpan>
                  <Bold600>{profileUser.numFollowing}</Bold600> Following
                </StyledSpan>
                <StyledSpan>
                  <Bold600>{profileUser.numFollowers}</Bold600> Followers
                </StyledSpan>
              </RowWrapper>
            </ProfileWrapper>
            <ProfileActionBar />
          </ColWrapper>
        </>
      ) : (
        <Spinner />
      )}
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
