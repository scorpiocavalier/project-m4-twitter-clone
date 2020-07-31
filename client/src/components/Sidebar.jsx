import React, { useContext } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { COLORS } from '../globalStyles'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { HomeIcon, UserIcon, NotificationIcon, BookmarkIcon } from '../Icons'
import { CurrentUserContext } from '../CurrentUserContext'

export default () => {
  const { currentUser } = useContext(CurrentUserContext)

  return (
    <Wrapper>
      <NavLink exact to={'/'}>
        <StyledLogo />
      </NavLink>
      <Navigation>
        <StyledLink exact to={`/`}>
          <HomeIcon />
          <LinkTag>Home</LinkTag>
        </StyledLink>
        <StyledLink to={`/profile/${currentUser.handle}`}>
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
  padding: 0 10px;
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
  font-weight: 600;
  padding: 10px 5px;
  font-family: 'arial';
`