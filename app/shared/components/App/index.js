import React from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from 'shared/routes'
import Navbar from 'components/Navbar'


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>

          {routes.map(({ path, exact, component: RouteComponent, ...rest}) => (

            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props) => <RouteComponent {...props} {...rest} />}
            />

          ))}

        </Switch>
      </div>
    )
  }
}
