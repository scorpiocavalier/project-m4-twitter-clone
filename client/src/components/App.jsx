import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import HomeFeed from './home/HomeFeed'
import Profile from './profile/Profile'
import Sidebar from './sidebar/Sidebar'
import TweetDetails from './tweet/TweetDetails'
import { CurrentUserContext } from './CurrentUserContext'
import { GlobalStyles } from '../globalStyles'

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
            <Route
              path="/notifications"
              render={() => <div>Notifications</div>}
            />
            <Route path="/bookmarks" render={() => <div>Bookmarks</div>} />
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
