import React from 'react';
import './sidebar.css';
import {Link} from "react-router-dom";
import Friends from './friends.jsx'

function Sidebar(props) {
	return(
		<div className="sidebar">
			<Link to="/profile" >Profile</Link>
			<Link to="/messages">Messages</Link>
			<Link to="/users">Users</Link>
			<Friends guys={props.guys} />
		</div>
	);
}

export default Sidebar;