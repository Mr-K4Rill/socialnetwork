import React from 'react';
import './sidebar.css';
import {Link} from "react-router-dom";
import Friend from './friend.jsx';

function Friends(props) {
	return(
		<div className="Friends">
			<h2>Friends</h2>
			<div className="FriendsContent">
				{props.guys.map((e) => <Friend name = {e.name} img = {e.img} /> )}
			</div>
		</div>
	)
}
 export default Friends;

