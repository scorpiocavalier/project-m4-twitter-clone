import React from 'react'
import { withBaseIcon } from 'react-icons-kit'
import { home, user, bell, bookmark, messageCircle, repeat, heart, share } from 'react-icons-kit/feather'
import { location, calendar } from 'react-icons-kit/entypo'
import { heart as fullHeart } from 'react-icons-kit/icomoon'

// Rules for sidebar icons
const SidebarIconWrapper = withBaseIcon({
  size: 25,
  style: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    width: '40px',
    height: '100%'
  }
})

const ProfileIconWrapper = withBaseIcon({
  size: 17,
  style: { marginRight: '8px' }
})

const TweetIconWrapper = withBaseIcon({
  size: 22,
})

const TweetGreenIconWrapper = withBaseIcon({
  size: 22,
  style: { color: 'green' }
})

const TweetBlueIconWrapper = withBaseIcon({
  size: 22,
  style: { color: 'blue' }
})

const TweetRedIconWrapper = withBaseIcon({
  size: 22,
  style: { color: 'red' }
})

export const HomeIcon = () => <SidebarIconWrapper icon={ home } />
export const UserIcon = () => <SidebarIconWrapper icon={ user } />
export const NotificationIcon = () => <SidebarIconWrapper icon={ bell } />
export const BookmarkIcon = () => <SidebarIconWrapper icon={ bookmark } />

export const LocationIcon = () => <ProfileIconWrapper icon={ location } />
export const CalendarIcon = () => <ProfileIconWrapper icon={ calendar } />
export const RepeatIconSmall = () => <ProfileIconWrapper icon={ repeat } />

export const CommentIcon = () => <TweetIconWrapper icon={ messageCircle } />
export const RepeatIcon = () => <TweetIconWrapper icon={ repeat } />
export const HeartIcon = () => <TweetIconWrapper icon={ heart } />
export const ShareIcon = () => <TweetIconWrapper icon={ share } />

export const CommentIcon2 = () => <TweetGreenIconWrapper icon={ messageCircle } />
export const RepeatIcon2 = () => <TweetBlueIconWrapper icon={ repeat } />
export const HeartIcon2 = () => <TweetRedIconWrapper icon={ fullHeart } />
export const ShareIcon2 = () => <TweetBlueIconWrapper icon={ share } />