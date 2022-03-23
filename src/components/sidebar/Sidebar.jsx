import React from 'react';
import './sidebar.css';
import {Link} from "react-router-dom";

function Sidebar() {
	return(
		<div class="sidebar">
			<Link to="/profile" >Profile</Link>
			<Link to="/messages">Messages</Link>
			<Link to="/users">Users</Link>
		</div>
	);
}

export default Sidebar;