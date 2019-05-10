import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${props => props.backgroundColor || '#4286f4'};
  color: ${props => props.textColor || '#fff'};
  height: ${props => props.height || '50px'};
  width: ${props => props.width || '100px'};
  text-transform: uppercase;

  :focus {
    outline: none;
  }
`

/**
 * A fully customizable button component.
 *
 * @param {string}      backgroundColor Optional parameter.
 * @param {string}      textColor       Optional parameter.
 * @param {string}      height          Optional parameter.
 * @param {string}      width           Optional parameter.
 *
 * @returns {Object}
 */
const Button = props => {
  const { backgroundColor, textColor, height, width } = props
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      textColor={textColor}
      height={height}
      width={width}>
      {props.name ? props.name : 'submit'}
    </StyledButton>
  )
}

Button.propTypes = {
  name: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
}

export default Button
