import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledRockerSwitch = styled.div`
  display: inline-block;
  position: relative;
  /*
SIZE OF SWITCH
==============
All sizes are in em - therefore
changing the font-size here
will change the size of the switch.
See .rocker-small below as example.
*/
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #888;
  width: 7em;
  height: 4em;
  overflow: hidden;
  border-bottom: 0.5em solid #eee;

  ::before {
    content: '';
    position: absolute;
    top: 0.5em;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #999;
    border: 0.5em solid #eee;
    border-bottom: 0;
  }
`

const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`

const StyledLeft = styled.span`
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5em;
  width: 3em;
  transition: 0.2s;
  height: 2.4em;
  width: 2.75em;
  left: 0.85em;
  bottom: 0.4em;
  background-color: #ddd;
  transform: rotate(15deg) skewX(15deg);

  ::before {
    content: '';
    position: absolute;
    width: 0.4em;
    height: 2.45em;
    bottom: -0.45em;
    background-color: #ccc;
    transform: skewY(-65deg);
    left: -0.4em;

    ${StyledInput}:checked {
      background-color: #0084d0;
      color: #fff;
      bottom: 0px;
      left: 0.5em;
      height: 2.5em;
      width: 3em;
      transform: rotate(0deg) skewX(0deg);
    }

    ${StyledInput}:checked + &::before {
      background-color: transparent;
      width: 3.0833em;
    }
  }
`

const StyledRight = styled.span`
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5em;
  width: 3em;
  transition: 0.2s;
  right: 0.5em;
  bottom: 0;
  background-color: #bd5757;
  color: #fff;

  ::before {
    content: '';
    position: absolute;
    width: 0.4em;
    height: 2.45em;
    bottom: -0.45em;
    background-color: #ccc;
    transform: skewY(-65deg);
    right: -0.375em;
    background-color: transparent;
    transform: skewY(65deg);
  }
`

const RockerSwitch = () => {
  return (
    <StyledRockerSwitch>
      <StyledInput type='checkbox' />
      <StyledLeft>ON</StyledLeft>
      <StyledRight>OFF</StyledRight>
    </StyledRockerSwitch>
  )
}

export default RockerSwitch
