import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import CurrentUserProvider from './components/CurrentUserContext'

ReactDOM.render(
  <CurrentUserProvider>
    <App />
  </CurrentUserProvider>,
  document.getElementById('root'),
)
