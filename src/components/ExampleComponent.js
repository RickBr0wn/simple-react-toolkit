import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledExampleComponent = styled.div`
  display: inline-block;
  margin: 2em auto;
  border: 2px solid #000;
  font-size: 3em;
`

function ExampleComponent({ text }) {
  return (
    <StyledExampleComponent>Example Component: {text}</StyledExampleComponent>
  )
}

ExampleComponent.propTypes = {
  text: PropTypes.string
}

export default ExampleComponent
