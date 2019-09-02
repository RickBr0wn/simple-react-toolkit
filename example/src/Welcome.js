import React from 'react'
import styled, { css } from 'styled-components'

const StyledWelcome = styled.div`
  background: red;
  max-width: 400px;
`

const StyledTitle = styled.h1`
  color: red;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`

const Welcome = () => {
  return (
    <StyledWelcome>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>

      <StyledTitle>Welcome to SRTK</StyledTitle>
      <p>
        Simple React Tool-Kit hopes to improve web development productivity by
        making simple and configurable React components that can be used for
        anything from mocking web projects, thru to production apps. Whilst
        learning React i found myself constantly creating and styling the same
        components time & time again. So i created this library to improve my
        overall developer experience. I hope it improves yours too.. 🤓
      </p>
    </StyledWelcome>
  )
}

export default Welcome
