import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import Profile from './profile/Profile'
import Sidebar from './sidebar/Sidebar'
import Rightbar from './sidebar/Rightbar'
import TweetFeed from './tweet/TweetFeed'
import TweetDetails from './tweet/TweetDetails'
import Error from './error/Error'
import Spinner from './spinner/Spinner'
import { CurrentUserContext } from './CurrentUserContext'
import { GlobalStyles } from '../globalStyles'
import { STATUS } from '../actions'

export default () => {
  const { state } = useContext(CurrentUserContext)
  const { status, homeFeed } = state

  console.log('STATUS:', status)

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
        return <Error />
    }
  }

  return (
    <Router>
      <GlobalStyles />
      <Grid>
        <LeftAside>
          <Sidebar />
        </LeftAside>

        <Main>{renderByStatus()}</Main>

        <RightAside>
          <Rightbar />
        </RightAside>
      </Grid>
    </Router>
  )
}

const Grid = styled.div`
  display: grid;
  grid: auto / 1fr 2fr 4fr 2fr 1fr;
  grid-template-areas: '. leftAside main rightAside .';
  @media (max-width: 1200px) {
    grid: auto / 1fr 8fr minmax(210px, 1fr);
    grid-template-areas: 'leftAside main rightAside';
  }
  @media (max-width: 900px) {
    grid: auto / 1fr 9fr;
    grid-template-areas: 'leftAside main';
  }
`

const LeftAside = styled.div`
  grid-area: leftAside;
  border-right: 2px solid #f6f6f9;
`

const Main = styled.div`
  grid-area: main;
`

const RightAside = styled.div`
  grid-area: rightAside;
  border-left: 2px solid #f6f6f9;
`
