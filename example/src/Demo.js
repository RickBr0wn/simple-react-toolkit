import React from 'react'
import marked from 'marked'
import hero from './images/hero.jpg'
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
  NavBar
} from 'simple-react-toolkit'

const App = () => (
  <div>
    <CssReset />
    <NavBar />
    <img src={hero} style={{ width: '100%' }} />
    <div
      style={{
        position: 'absolute',
        top: '300px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#fff',
        textAlign: 'center',
        width: '100%'
      }}>
      <h1 style={{ fontSize: '6.2rem' }}>Simple React Toolkit</h1>
      <hr style={{ width: '25%', margin: '0 auto' }} />
      <h3 style={{ fontSize: '3.6rem' }}>
        Modern Styled React Component Modules
      </h3>
    </div>
    {/* <ExampleComponent text='Modern Styled React Component Modules' /> */}
    <div dangerouslySetInnerHTML={{ __html: marked(MD) }} />
    <RockerSwitch />
    <ToggleSwitch activeColor='#003dda' />
    <ToggleSwitch />
    <ToggleSwitch />
    <ToggleSwitch />
    <ToggleSwitch />
    <ToggleSwitch />
    <ToggleSwitch />

    <TextInput
      inputColor='#4286f4'
      inputWidth='50%'
      type='email'
      placeholder='email'
    />
    <TextInput
      inputColor='#4286f4'
      inputWidth='50%'
      type='text'
      placeholder='password'
    />
    <Button
      name='Submit'
      backgroundColor='#4286f4'
      textColor='#fff'
      height='50px'
      width='100px'
      uppercase={false}
    />
    <Button
      name='Cancel'
      backgroundColor='#f4424b'
      textColor='#fff'
      height='50px'
      width='100px'
    />
    <MasonryLayout columns={4} gap={2} padding='0 10rem'>
      {[...Array(24).keys()].map((item, index) => {
        // Map thru an array of images, and for each 'image' return a JSX element.
        //  For demo purposes, I have used StyledBlankDiv, to demonstrate different height columns
        const height = `${250 + Math.ceil(Math.random() * 350)}px`
        return (
          <StyledBlankDiv key={index} height={height}>
            {index + 1}
          </StyledBlankDiv>
        )
      })}
    </MasonryLayout>
  </div>
)

export default App
