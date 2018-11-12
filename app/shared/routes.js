import React from 'react';

import HomePage from 'containers/HomePage'
import OtherPage from 'containers/OtherPage'
import AnotherPage from 'containers/AnotherPage'


const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    path: '/other',
    component: OtherPage
  },
  {
    path: '/another',
    component: AnotherPage
  },
]

export default routes
