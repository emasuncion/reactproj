import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import { Navbar, NavDropdown, MenuItem, Nav, NavItem } from 'react-bootstrap';
import * as FontAwesome from 'react-icons/lib/fa';

export class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<ul>
					<li>Eleirold M. Asuncion &copy; 2017</li>
					<li id="githubicon">
						<a href="https://github.com/emasuncion/reactproj" target="_blank">
							<FontAwesome.FaGithub size="26"/>
						</a>
					</li>
				</ul>
			</div>
		);
	}
}