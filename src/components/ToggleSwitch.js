import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLabel = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`

const StyledToggle = styled.div`
  isolation: isolate;
  position: relative;
  height: 24px;
  width: 48px;
  border-radius: 15px;
  background: #d6d6d6;
  overflow: hidden;
`

const StyledToggleInner = styled.div`
  z-index: 2;
  position: absolute;
  top: 1px;
  left: 1px;
  height: 22px;
  width: 46px;
  border-radius: 15px;
  overflow: hidden;
`

const StyledIndicator = styled.div`
  height: 100%;
  width: 200%;
  background: white;
  border-radius: 13px;
  transform: translate3d(-75%, 0, 0);
  transition: transform 0.35s cubic-bezier(0.85, 0.05, 0.18, 1.35);
`

const StyledActive = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 200%;
  background: ${props => props.activeColor || '#55c57a'};
  transform: translate3d(-100%, 0, 0);
  transition: transform 0.05s linear 0.17s;
`

const StyledLabelText = styled.div`
  margin-left: 8px;
`

const StyledInput = styled.input`
  display: none;

  &:checked ~ ${StyledActive} {
    transform: translate3d(-50%, 0, 0);
  }

  :checked ~ ${StyledToggleInner} ${StyledIndicator} {
    transform: translate3d(25%, 0, 0);
  }
`

const ToggleSwitch = props => {
  const { state, onClick, activeColor } = props
  return (
    <div>
      <StyledLabel>
        <StyledToggle>
          <StyledInput type='checkbox' value={state} onClick={onClick} />
          <StyledToggleInner>
            <StyledIndicator />
          </StyledToggleInner>
          <StyledActive activeColor={activeColor} />
        </StyledToggle>
        <StyledLabelText>{state}</StyledLabelText>
      </StyledLabel>
    </div>
  )
}

ToggleSwitch.propTypes = {
  state: PropTypes.bool,
  onClick: PropTypes.func,
  activeColor: PropTypes.string
}

export default ToggleSwitch
