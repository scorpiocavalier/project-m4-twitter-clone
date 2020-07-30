import React from 'react'
import { withBaseIcon } from 'react-icons-kit'
import { home, user, bell, bookmark } from 'react-icons-kit/icomoon'

// Rules for sidebar icons
const SidebarIconWrapper = withBaseIcon({
  size: 20,
  style: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '100%'
  }
})

export const HomeIcon = () => <SidebarIconWrapper icon={ home } />
export const UserIcon = () => <SidebarIconWrapper icon={ user } />
export const NotificationIcon = () => <SidebarIconWrapper icon={ bell } />
export const BookmarkIcon = () => <SidebarIconWrapper icon={ bookmark } />