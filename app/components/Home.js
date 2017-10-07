import React from 'react';
import { Comparison } from './Comparison';
import { Link } from 'react-router-dom';

export class Home extends React.Component
{
	render() {
		return (
	        <div className="content">
	        	<h1 className="reactHeader">What is React.js</h1>
	        	<img id="think" src="./app/img/maxresdefault.jpg" alt="Thinking Face Emoji" />
	        </div>
	    );
	}
}
