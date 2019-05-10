import React from 'react'
import {
  ExampleComponent,
  CssReset,
  TextInput,
  Button,
  MasonryLayout
} from 'simple-react-toolkit'

const App = () => (
  <div>
    <CssReset />
    <ExampleComponent text='Modern Styled React Component Modules' />
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
      {[...Array(24).keys()].map((item, index) => {
        const height = 250 + Math.ceil(Math.random() * 350)
        return (
          <div
            style={{
              height: `${height}px`,
              background: 'rgba(0, 0, 255, 0.3)',
              padding: '1.2rem',
              fontSize: '2.4rem',
              fontWeight: 'bolder',
              color: '#fff'
            }}>
            {index + 1}
          </div>
        )
      })}
    </MasonryLayout>
  </div>
)

export default App
