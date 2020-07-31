import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalStyles } from './globalStyles'
import styled from 'styled-components'
import HomeFeed from './components/HomeFeed'
import Notifications from './components/Notifications'
import Bookmarks from './components/Bookmarks'
import Profile from './components/Profile'
import Sidebar from './components/Sidebar'
import TweetDetails from './components/TweetDetails'

export default () => {
  return (
    <Router>
      <GlobalStyles />
      <MainWrapper>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <HomeFeed />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route path="/tweet/tweetId">
            <TweetDetails />
          </Route>
          <Route path="/profile/:profileId">
            <Profile />
          </Route>
        </Switch>
      </MainWrapper>
    </Router>
  )
}

const MainWrapper = styled.div`
  display: flex;
`
