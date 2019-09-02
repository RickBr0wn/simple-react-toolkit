import React from 'react'
import marked from 'marked'
import styled from 'styled-components'
import Hero from './Hero'
import Welcome from './Welcome'
import MD from './images/MD.md'
import {
  ExampleComponent,
  CssReset,
  TextInput,
  Button,
  ToggleSwitch,
  MasonryLayout,
  StyledBlankDiv,
  RockerSwitch,
  NavBar,
} from 'simple-react-toolkit'

const Content = styled.div`
  background: red;
`

const App = () => (
  <div>
    <CssReset />
    <NavBar />
    <Hero />
    <Content>
      <Welcome />
    </Content>
    {/* <ToggleSwitch activeColor="#003dda" />
    <ToggleSwitch />
    <ToggleSwitch />
    <ToggleSwitch />
    <ToggleSwitch />
    <ToggleSwitch />
    <ToggleSwitch />

    <TextInput
      inputColor="#4286f4"
      inputWidth="50%"
      type="email"
      placeholder="email"
    />
    <TextInput
      inputColor="#4286f4"
      inputWidth="50%"
      type="text"
      placeholder="password"
    />
    <Button
      name="Submit"
      backgroundColor="#4286f4"
      textColor="#fff"
      height="50px"
      width="100px"
      uppercase={false}
    />
    <Button
      name="Cancel"
      backgroundColor="#f4424b"
      textColor="#fff"
      height="50px"
      width="100px"
    />
    <MasonryLayout columns={4} gap={2} padding="0 10rem">
      {[...Array(24).keys()].map((item, index) => {
        // Map thru an array of images, and for each 'image' return a JSX element.
        //  For demo purposes, I have used StyledBlankDiv, to demonstrate different height items.
        const height = `${250 + Math.ceil(Math.random() * 350)}px`
        return (
          <StyledBlankDiv key={index} height={height}>
            {index + 1}
          </StyledBlankDiv>
        )
      })}
    </MasonryLayout> */}
  </div>
)

export default App
