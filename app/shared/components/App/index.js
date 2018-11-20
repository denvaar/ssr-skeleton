import React from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from 'shared/routes'
import { DataProvider } from 'shared/contexts/DataContext'
import Navbar from 'components/Navbar'


export default class App extends React.Component {
  render() {
    /* TODO: maybe put the provider in the render prop of each Route */
    return (
      <DataProvider initialState={this.props.initialState}>
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
      </DataProvider>
    )
  }
}
