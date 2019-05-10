import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${props => props.theme.primary || '#4286f4'};

  :focus {
    outline: none;
  }
`

const Button = props => {
  return <StyledButton>{props.name ? props.name : 'submit'}</StyledButton>
}

Button.propTypes = {
  name: PropTypes.string
}

export default Button
