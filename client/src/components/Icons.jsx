import React from 'react'
import styled, { keyframes } from 'styled-components'
import { withBaseIcon, Icon } from 'react-icons-kit'
import { u1F4A3 as bomb } from 'react-icons-kit/noto_emoji_regular/u1F4A3'
import { spinner } from 'react-icons-kit/fa'
import { heart as fullHeart } from 'react-icons-kit/icomoon'
import { location, calendar } from 'react-icons-kit/entypo'
import {
  home,
  user,
  bell,
  bookmark,
  messageCircle,
  repeat,
  heart,
  share,
} from 'react-icons-kit/feather'

const SidebarIconWrapper = withBaseIcon({
  size: 25,
  style: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '100%',
  },
})

const ProfileIconWrapper = withBaseIcon({
  size: 17,
  style: { marginRight: '8px' },
})

const TweetIconWrapper = withBaseIcon({
  size: 22,
})

const TweetGreenIconWrapper = withBaseIcon({
  size: 22,
  style: { color: 'green' },
})

const TweetBlueIconWrapper = withBaseIcon({
  size: 22,
  style: { color: 'blue' },
})

const TweetRedIconWrapper = withBaseIcon({
  size: 22,
  style: { color: 'red' },
})

const ErrorIconWrapper = withBaseIcon({
  size: 70,
})

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const SpinnerIconWrapper = styled(Icon)`
  animation: ${spin} 1s infinite alternate;
`

// Sidebar
export const HomeIcon = () => <SidebarIconWrapper icon={home} />
export const UserIcon = () => <SidebarIconWrapper icon={user} />
export const NotificationIcon = () => <SidebarIconWrapper icon={bell} />
export const BookmarkIcon = () => <SidebarIconWrapper icon={bookmark} />

// Profile
export const LocationIcon = () => <ProfileIconWrapper icon={location} />
export const CalendarIcon = () => <ProfileIconWrapper icon={calendar} />
export const RepeatIconSmall = () => <ProfileIconWrapper icon={repeat} />

// Tweet
export const CommentIcon = () => <TweetIconWrapper icon={messageCircle} />
export const RepeatIcon = () => <TweetIconWrapper icon={repeat} />
export const HeartIcon = () => <TweetIconWrapper icon={heart} />
export const ShareIcon = () => <TweetIconWrapper icon={share} />
export const CommentIcon2 = () => <TweetGreenIconWrapper icon={messageCircle} />
export const RepeatIcon2 = () => <TweetBlueIconWrapper icon={repeat} />
export const HeartIcon2 = () => <TweetRedIconWrapper icon={fullHeart} />
export const ShareIcon2 = () => <TweetBlueIconWrapper icon={share} />

// Error
export const BombIcon = () => <ErrorIconWrapper icon={bomb} />

// Spinner
export const SpinnerIcon = () => <SpinnerIconWrapper size={50} icon={spinner} />
