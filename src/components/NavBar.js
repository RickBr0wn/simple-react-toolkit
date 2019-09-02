import React from 'react'
import styled from 'styled-components'

const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 55px;
  background: #333;
  color: #fff;
`

const NavBar = () => {
  return (
    <StyledNavBar>
      <h2>Simple React ToolKit - SRTK</h2>
    </StyledNavBar>
  )
}

export default NavBar
