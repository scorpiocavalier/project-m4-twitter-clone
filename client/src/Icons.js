import React from 'react'
import { withBaseIcon } from 'react-icons-kit'
import { home, user, bell, bookmark } from 'react-icons-kit/feather'

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

export const HomeIcon = () => <SidebarIconWrapper icon={ home } />
export const UserIcon = () => <SidebarIconWrapper icon={ user } />
export const NotificationIcon = () => <SidebarIconWrapper icon={ bell } />
export const BookmarkIcon = () => <SidebarIconWrapper icon={ bookmark } />