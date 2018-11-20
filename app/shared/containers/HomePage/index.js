import React from 'react'

import { DataConsumer } from 'shared/contexts/DataContext'


class HomePage extends React.Component {
  render() {
    return (
      <DataConsumer>
        {({ result }) => (
          <div>
            <div className="wrapper">
              <div>
                <h1>
                  💀
                </h1>
                <p>{result}</p>
              </div>
            </div>
          </div>
        )}
      </DataConsumer>
    )
  }
}

export default HomePage
