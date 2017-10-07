import React from 'react';
import { render } from 'react-dom';

import { Route, BrowserRouter, Switch, browserHistory, Link, NavLink } from 'react-router-dom';

import './components/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import * as FontAwesome from 'react-icons/lib/fa';

import { Home } from './components/Home';
import { Introduction } from './components/Introduction';
import { Comparison } from './components/Comparison';
import { Jsx } from './components/Jsx';
import { Rendering } from './components/Rendering';
import { Components } from './components/Components';
import { Proptypes } from './components/Proptypes';
import { State } from './components/State';
import { Eventhandling } from './components/Eventhandling';
import { Footer } from './components/Footer';

import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();

render(
	<BrowserRouter>
		<div>
			<div className="navBar">
		        <ul className="header">
		        	<li><NavLink to="/"><FontAwesome.FaHome size="36"/></NavLink></li>
					<li><NavLink to="/introduction" activeClassName="selected">Introduction</NavLink></li>
					<li><NavLink to="/comparison" activeClassName="selected">Comparison to jQuery</NavLink></li>
					<li><NavLink to="/jsx" activeClassName="selected">JSX</NavLink></li>
					<li><NavLink to="/rendering" activeClassName="selected">Rendering</NavLink></li>
					<li><NavLink to="/components" activeClassName="selected">Components and Props</NavLink></li>
					<li><NavLink to="/proptypes" activeClassName="selected">PropTypes</NavLink></li>
					<li><NavLink to="/state" activeClassName="selected">State</NavLink></li>
					<li><NavLink to="/eventhandling" activeClassName="selected">Event Handling</NavLink></li>
					<li><a id="title" href="/">React.js</a></li>
		        </ul>
	      	</div>

		    <Route exact path="/" component={Home}/>
		    <Route path="/introduction" component={Introduction}/>
		    <Route path="/comparison" component={Comparison}/>
		    <Route path="/jsx" component={Jsx}/>
		    <Route path="/rendering" component={Rendering}/>
		    <Route path="/components" component={Components}/>
		    <Route path="/proptypes" component={Proptypes}/>
		    <Route path="/state" component={State}/>
		    <Route path="/eventhandling" component={Eventhandling}/>
	    </div>
	</BrowserRouter>,
  document.getElementById('app')
);
render(<Footer />, document.getElementById('footer'));