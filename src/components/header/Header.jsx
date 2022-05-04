import React from 'react';
import './header.css';


function Header() {
	return(
		<div className="header">
			<img src={require("./Vanamo_Logo.png")} />
			<h1>Social Network</h1>
		</div>
		);
}

export default Header;
