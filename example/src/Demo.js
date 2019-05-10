import React from 'react'
import {
  ExampleComponent,
  CssReset,
  TextInput,
  Button
} from 'simple-react-toolkit'

const App = props => (
  <div>
    <CssReset />
    <ExampleComponent text='Modern Styled React Component Modules' />
    <TextInput
      inputColor={props => props.theme.primary}
      inputWidth='50%'
      type='email'
    />
    <Button name='test' />
  </div>
)

export default App
