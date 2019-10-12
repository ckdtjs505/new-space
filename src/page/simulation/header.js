import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div style={{ maxWidth : "100%", backgroundColor : "black"}}>
      <Navbar style={{maxWidth : "90%", margin : "auto", padding : "0"}} dark expand="md">
        <NavbarBrand  tag={Link} to={'/'}  >New space</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to={"/simulation"} style={{width : "10rem", color : "white", textAlign: "center" , backgroundColor : "red"}} >우주 시뮬레이션</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to={"/search"} style={{width : "10rem",textAlign: "center" }} >우주 검색</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to={"/search"} style={{width : "10rem", textAlign: "center"}} >신우주항공</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Header;