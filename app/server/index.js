import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import App from 'components/App'
import template from './template'
import { getHelloWorld } from 'shared/utils/api'


const app = express()
app.use(express.static('dist'))
app.use(express.static('app/shared/public'))

app.get('*', (req, res) => {
  getHelloWorld()
    .then(response => {
      const appString = renderToString(
        <StaticRouter
          context={{}}
          location={req.url}
        >
          <App initialState={response} />
        </StaticRouter>
      )

      res.send(template({
        body: appString,
        title: 'Server Rendering',
        state: response
      }))
    })
})

const port = 3000
app.listen(port)
console.log(`Listening on port ${port}`)
