import React from 'react'
import {
  ExampleComponent,
  CssReset,
  TextInput,
  Button,
  MasonryLayout,
  StyledBlankDiv,
  RockerSwitch
} from 'simple-react-toolkit'

const App = () => (
  <div>
    <CssReset />
    <ExampleComponent text='Modern Styled React Component Modules' />
    <RockerSwitch />
    <TextInput
      inputColor='#4286f4'
      inputWidth='100%'
      type='email'
      placeholder='email'
    />
    <Button
      name='test'
      backgroundColor='#4286f4'
      textColor='#fff'
      height='50px'
      width='100px'
    />
    <MasonryLayout columns={4} gap={2} padding='0 10rem'>
      {/* Map thru an array of images, and for each 'image' return a JSX element.
          For demo purposes, I have used StyledBlankDiv, to demonstrate different height columns */}
      {[...Array(24).keys()].map((item, index) => {
        const height = `${250 + Math.ceil(Math.random() * 350)}px`
        return <StyledBlankDiv height={height}>{index + 1}</StyledBlankDiv>
      })}
    </MasonryLayout>
  </div>
)

export default App
