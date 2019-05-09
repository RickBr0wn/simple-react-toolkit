import React, { Component } from 'react'

import { ExampleComponent, CssReset } from 'simple-react-toolkit'

export default class App extends Component {
  render() {
    return (
      <div>
        <CssReset />
        <ExampleComponent text='Modern React component module' />
      </div>
    )
  }
}
