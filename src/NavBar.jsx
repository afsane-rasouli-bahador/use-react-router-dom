import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavigationStyle = styled.nav`
display: flex;
gap: 0.3rem;
`
function NavBar() {
  return (
    <div>
        <NavigationStyle>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </NavigationStyle>
    </div>
  )
}

export default NavBar
