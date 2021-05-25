import React from 'react'
import styled from 'styled-components'

export default function NavigationBar() {
  return (
    <NavigationBarContainer>
      <h3 className="nav__username">Nate</h3>
      <button className="logout__button">Logout</button>
    </NavigationBarContainer>
  )
}
const NavigationBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--grey);
  color: var(--dark-blue);
  .nav__username {
    margin: 1rem;
  }
  .logout__button {
    padding: 1rem;
    background: transparent;
    color: var(--dark-blue);
    border: none;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
  }
`