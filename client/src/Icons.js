import React from 'react'
import { withBaseIcon } from 'react-icons-kit'
import { home, user, bell, bookmark } from 'react-icons-kit/feather'
import { location, calendar } from 'react-icons-kit/entypo'

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
  style: { marginRight: "8px" }
})

export const HomeIcon = () => <SidebarIconWrapper icon={ home } />
export const UserIcon = () => <SidebarIconWrapper icon={ user } />
export const NotificationIcon = () => <SidebarIconWrapper icon={ bell } />
export const BookmarkIcon = () => <SidebarIconWrapper icon={ bookmark } />
export const LocationIcon = () => <ProfileIconWrapper icon={ location } />
export const CalendarIcon = () => <ProfileIconWrapper icon={ calendar } />