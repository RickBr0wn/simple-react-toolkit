import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import './index.css'
import Demo from './Demo'

const theme = {
  primary: '#a04ed9'
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Demo />
  </ThemeProvider>,
  document.getElementById('root')
)
