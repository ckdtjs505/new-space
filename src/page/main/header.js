import React from 'react';
import {
  Navbar,
  NavbarBrand,
 } from 'reactstrap';
 import { Link } from 'react-router-dom';

function Header() {
  return (
    <div style={{ maxWidth : "100%", backgroundColor : "black"}}>
      <Navbar style={{maxWidth : "90%", margin : "auto", padding : "0"}} dark expand="md">
        <NavbarBrand  tag={Link} to={"/"}>New space</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Header;