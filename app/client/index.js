import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from 'components/App'


const initialState = window.__INITIAL_STATE__
delete window.__INITIAL_STATE__

ReactDOM.hydrate(
  <BrowserRouter>
    <App initialState={initialState} />
  </BrowserRouter>,
  document.getElementById('root')
)
