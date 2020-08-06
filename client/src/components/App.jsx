import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import Profile from './profile/Profile'
import Sidebar from './sidebar/Sidebar'
import TweetFeed from './tweet/TweetFeed'
import TweetDetails from './tweet/TweetDetails'
import Error from './error/Error'
import Spinner from './spinner/Spinner'
import { CurrentUserContext } from './CurrentUserContext'
import { GlobalStyles } from '../globalStyles'
import { STATUS } from '../actions'

export default () => {
  const { status, homeFeed } = useContext(CurrentUserContext)

  const renderByStatus = () => {
    switch (status) {
      case STATUS.ERROR:
        return <Error />
      case STATUS.LOADING:
        return <Spinner />
      case STATUS.IDLE:
        return (
          <Switch>
            <Route exact path="/">
              <TweetFeed feed={homeFeed} />
            </Route>
            <Route
              path="/notifications"
              render={() => <h1>Notifications</h1>}
            />
            <Route path="/bookmarks" render={() => <h1>Bookmarks</h1>} />
            <Route path="/tweet/:tweetId">
              <TweetDetails />
            </Route>
            <Route path={`/profile`}>
              <Profile />
            </Route>
          </Switch>
        )
      default:
        return
    }
  }

  return (
    <Router>
      <GlobalStyles />
      <MainWrapper>
        <Sidebar />
        {renderByStatus()}
      </MainWrapper>
    </Router>
  )
}

const MainWrapper = styled.div`
  display: flex;
`
