import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalStyles } from './globalStyles'
import styled from 'styled-components'
import HomeFeed from './components/HomeFeed'
import Notifications from './components/Notifications'
import Bookmarks from './components/Bookmarks'
import Profile from './components/Profile'
import Sidebar from './components/Sidebar'
import TweetDetails from './components/TweetDetails'
import { CurrentUserContext } from './CurrentUserContext'

export default () => {
  const { status } = useContext(CurrentUserContext)

  return (
    <Router>
      <GlobalStyles />
      <MainWrapper>
        <Sidebar />
        {status === 'loading' ? (
          <LoadingWrapper>
            <Spinner>LOADING...</Spinner>
          </LoadingWrapper>
        ) : (
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
            <Route path="/tweet/:tweetId">
              <TweetDetails />
            </Route>
            <Route path={`/profile`}>
              <Profile />
            </Route>
          </Switch>
        )}
      </MainWrapper>
    </Router>
  )
}

const MainWrapper = styled.div`
  display: flex;
`

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`

const Spinner = styled.span`
  padding: 15px;
`