import React, { useContext } from 'react'
import styled from 'styled-components'
import Handle from './Handle'
import { CurrentUserContext } from '../CurrentUserContext'

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
    <ColWrapper>
      <Handle handle={handle} />
    </ColWrapper>
  )
}

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const ColWrapper = styled.div`
  display: flex;
  flex-direction: col;
  border: 2px solid #f6f6f9;
`
