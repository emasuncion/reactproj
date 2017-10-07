import React from 'react';

export class Introduction extends React.Component
{
	react() {
		alert('Clicked');
	}

	render() {
		return (
	      <div>
	      	<div className="content">
	      		<img onClick={this.react} id="react1" src="./app/img/react1.png" alt="React.js" />
	      	</div>
	      </div>
	    );
	}
}
