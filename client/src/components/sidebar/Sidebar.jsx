import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { HomeIcon, UserIcon, NotificationIcon, BookmarkIcon } from '../Icons'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { COLORS } from '../../globalStyles'

export default () => {
  return (
    <Wrapper>
      <NavLink exact to={'/'}>
        <StyledLogo />
      </NavLink>
      <Navigation className="titleFont">
        <StyledLink exact to={`/`}>
          <HomeIcon />
          <LinkTag>Home</LinkTag>
        </StyledLink>
        <StyledLink to={`/me/profile`}>
          <UserIcon />
          <LinkTag>Profile</LinkTag>
        </StyledLink>
        <StyledLink to={`/notifications`}>
          <NotificationIcon />
          <LinkTag>Notifications</LinkTag>
        </StyledLink>
        <StyledLink to={`/bookmarks`}>
          <BookmarkIcon />
          <LinkTag>Bookmarks</LinkTag>
        </StyledLink>
      </Navigation>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 15px;
`

const StyledLogo = styled(Logo)`
  width: 50px;
  height: 100px;
`

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLink = styled(NavLink)`
  display: flex;
  padding: 10px 5px;
  &.active {
    color: ${COLORS.primary};
  }
  &:hover {
    background: ${COLORS.primary_hover};
    border-radius: 25px;
  }
  &:hover,
  &:active {
    color: ${COLORS.primary};
  }
`

const LinkTag = styled.div`
  font-size: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`
