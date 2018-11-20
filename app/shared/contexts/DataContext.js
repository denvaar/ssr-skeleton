import React from 'react'

import { getHelloWorld } from 'shared/utils/api'


const DataContext = React.createContext()

class DataProvider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      result: props.initialState
    }
  }

  componentDidMount() {
    if (this.props.initialState === null) {
      getHelloWorld()
        .then(response => {
          this.setState({ result: response })
        })
    }
  }

  render() {
    const { result } = this.state

    return (
      <DataContext.Provider
        value={{
          result
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    )
  }
}

DataProvider.defaultProps = {
  initialState: null
}

const DataConsumer = DataContext.Consumer

export { DataProvider, DataConsumer }
