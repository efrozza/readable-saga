import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class CustomNavBar extends Component {
  render () {
    return (
      <div>
        <Navbar default collapseOnSelect>
          <Navbar.Header>
            <LinkContainer to='/'>
              <Navbar.Brand>Readable app</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to='/NewPost'>
                <NavItem eventKey={1}>New Posts</NavItem>
              </LinkContainer>
              <LinkContainer to='/About'>
                <NavItem eventKey={2}>About</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
