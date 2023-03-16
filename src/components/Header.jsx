import React from 'react'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import { Navbar, Nav, NavItem, NavbarBrand } from 'react-bootstrap' 
import StonesPicture from "../assets/stones-only-4e4e7508d1d8c41990bf2214e086b0c8.jpg"
const Header = () => {
  return (
    <Navbar expand="lg">
        <img className='m-2' style={{height: 150}} src = {StonesPicture}/>
    <NavbarBrand style={{color: "#2b758b"}} href="#">Stones of Light Education Foundation</NavbarBrand>
    <NavbarCollapse>
      <Nav>
        <NavItem href="#">Home</NavItem>
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Contact</NavItem>
      </Nav>
    </NavbarCollapse>
  </Navbar>
  )
}

export default Header
