import React, {useState} from 'react';
import {
  Collapse,
  NavbarToggler,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './style.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ maxWidth : "100%", backgroundColor : "black"}}>
      <Navbar style={{maxWidth : "90%", margin : "auto", padding : "0"}} dark expand="md">
        <NavbarBrand tag={Link} to={"/"}>New space</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className ="navLink" tag={Link} to={"/simulation"}>우주 시뮬레이션</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className ="navLink" tag={Link} to={"/search"} >우주 검색</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className ="navLink" style={{color:"white", backgroundColor :"red"}}  tag={Link} to={"/newspace"}>신우주항공</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header;