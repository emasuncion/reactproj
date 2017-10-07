import React from 'react';
import './main.css';
import { Navbar, NavDropdown, MenuItem, Nav, NavItem } from 'react-bootstrap';

class Header extends React.Component{
	startShow(e) {
		e.preventDefault();
		console.log('me ius pressed');
	}
	render() {
		return (
		  <Navbar inverse collapseOnSelect className="headers">
		    <Navbar.Header>
		      <Navbar.Brand onClick={this.startShow}>
		        <h1>React.js Knowledge Sharing</h1>
		      </Navbar.Brand>
		      <Navbar.Toggle />
		    </Navbar.Header>
		    <Navbar.Collapse>
		      <Nav>
		        <NavItem eventKey={1} href="#" onClick={this.startShow}>Introduction</NavItem>
		        <NavItem eventKey={2} href="#">Comparison to jQuery</NavItem>
		        <NavDropdown eventKey={3} title="Topics" id="basic-nav-dropdown">
		          <MenuItem eventKey={3.1}>JSX</MenuItem>
		          <MenuItem eventKey={3.2}>Rendering</MenuItem>
		          <MenuItem eventKey={3.3}>Components and Props</MenuItem>
		          <MenuItem eventKey={3.4}>PropTypes</MenuItem>
		          <MenuItem eventKey={3.5}>State</MenuItem>
		          <MenuItem eventKey={3.6}>Event Handling</MenuItem>
		          <MenuItem eventKey={3.7}>State</MenuItem>
		        </NavDropdown>
		      </Nav>
		    </Navbar.Collapse>
		  </Navbar>
		);
	}
}

export class Navigation extends React.Component {
	render() {
		return <Header />;
	}
}