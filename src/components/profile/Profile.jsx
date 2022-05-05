import React from 'react';
import './profile.css';
import Posts from "./posts.jsx"

function Profile(props) {
	return(
		<div className="profile">
			<div className="about_me">
				<img src={require("./be-active_640.jpg")} alt="icon" />
				<span>{props.name}</span>
			</div>
			<Posts DataPost = {props.DataPost} addPost = {props.addPost} NewPostText={props.NewPostText}/>
		</div>
	);
}

export default Profile;