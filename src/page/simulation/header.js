import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div style={{ maxWidth : "100%", backgroundColor : "black"}}>
        <Navbar style={{maxWidth : "90%", margin : "auto", padding : "0"}} dark expand="md">
          <NavbarBrand href="/">New space</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{width : "10rem", color : "white", textAlign: "center" , backgroundColor : "red"}} href="/components/">우주 시뮬레이션</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{width : "10rem",textAlign: "center" }} href="/search/">우주 검색</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{width : "10rem", textAlign: "center"}} href="/components/">신우주항공</NavLink>
              </NavItem>
            
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}