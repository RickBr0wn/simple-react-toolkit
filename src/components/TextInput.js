import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTextInput = styled.input`
  font-size: 1.5rem;
  margin: 5px;
  font-family: inherit;
  color: inherit;
  padding: 1.5rem 2rem;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-bottom: 3px solid transparent;
  width: ${props => props.inputWidth || '100%'};
  display: border-box;
  transition: all 0.3s;

  :focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid #55c57a;
    border-color: ${props => props.inputColor || '#55c57a'};
  }

  ::-webkit-input-placeholder {
    color: #999;
  }

  :focus:invalid {
    border-bottom: 3px solid #ff7730;
  }
`

// const StyledLabel = styled.label`
//   font-size: 1.2rem;
//   font-weight: 700;
//   margin-left: 2rem;
//   margin-top: 0.7rem;
//   display: block;
//   transition: all 0.3s;

//   /*
//   :placeholder-shown {
//     opacity: 0;
//     visibility: hidden;
//     transform: translateY(-4rem);
//   }
//   */
// `

const TextInput = props => {
  const { type, inputColor, inputWidth, placeholder } = props
  return (
    <div>
      <StyledTextInput
        type={type}
        inputColor={inputColor}
        inputWidth={inputWidth}
        placeholder={placeholder}
      />
      {/* <StyledLabel for={type}>{type}</StyledLabel> */}
    </div>
  )
}

TextInput.propTypes = {
  inputColor: PropTypes.func,
  inputWidth: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default TextInput
