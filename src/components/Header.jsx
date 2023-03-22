import React from 'react'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import { Navbar, Nav, NavItem, NavbarBrand } from 'react-bootstrap' 
import StonesPicture from "../assets/stones-only-4e4e7508d1d8c41990bf2214e086b0c8.jpg"
const Header = () => {
  return (
    <Navbar fluid className=' d-flex shadow p-3' style={{height: 100}} expand="lg">
    <div className='d-flex align-items-center' style={{color: "#2b758b"}} href="#">
      <img style={{height: 80}} className='m-2' src = {StonesPicture}/>
      <h3>Stones of Light <br/> Education Foundation</h3>
        </div>
  </Navbar>
  )
}

export default Header
