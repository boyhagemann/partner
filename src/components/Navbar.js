import React, { Component } from 'react'
import StyledLink from './StyledLink'

class NavBar extends Component {
  render() {
    return (
      <div>
        <StyledLink to="/home">Home</StyledLink>
        <StyledLink to="/components">Components</StyledLink>
      </div>
    )
  }
}

export default NavBar
