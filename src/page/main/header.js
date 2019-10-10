import React from 'react';
import {
  Navbar,
  NavbarBrand,
 } from 'reactstrap';
 import { Link } from 'react-router-dom';

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
          <NavbarBrand  tag={Link} to={"/"}>New space</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}