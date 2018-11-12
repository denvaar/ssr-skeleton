import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import App from 'components/App'
import template from './template'


const app = express()
app.use(express.static('dist'))
app.use(express.static('app/shared/public'))

app.get('*', (req, res) => {
  const appString = renderToString(
    <StaticRouter
      location={req.url}
    >
      <App />
    </StaticRouter>
  )

  res.send(template({
    body: appString,
    title: 'Server Rendering'
  }))
})

const port = 3000
app.listen(port)
console.log(`Listening on port ${port}`)
