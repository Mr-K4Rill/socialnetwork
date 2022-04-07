import React from 'react';
import './profile.css';
import Posts from "./posts.jsx"

function Profile(props) {
	return(
		<div class="profile">
			<div class="about_me">
				<img src={require("./be-active_640.jpg")} />
				<span>{props.name}</span>
			</div>
			<Posts DataPost = {props.DataPost} />
		</div>
	);
}

export default Profile;