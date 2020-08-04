import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import HomeFeed from './home/HomeFeed'
import Profile from './profile/Profile'
import Sidebar from './sidebar/Sidebar'
import TweetDetails from './tweet/TweetDetails'
import Error from './error/Error'
import { CurrentUserContext } from './CurrentUserContext'
import { GlobalStyles } from '../globalStyles'
import { STATUS } from '../constants'

export default () => {
  const { status } = useContext(CurrentUserContext)

  const renderByStatus = () => {
    switch (status) {
      case STATUS.ERROR:
        return <Error />
      case STATUS.LOADING:
        return (
          <LoadingWrapper>
            <Spinner>LOADING...</Spinner>
          </LoadingWrapper>
        )
      case STATUS.IDLE:
        return (
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
        )
      default: return
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

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`

const Spinner = styled.span`
  padding: 15px;
`
