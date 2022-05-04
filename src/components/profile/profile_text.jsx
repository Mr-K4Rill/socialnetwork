import React from 'react';
import './profile.css';

function ProfileText(props) {
	return(
		<>
		<p className="text">{props.message}</p>
		<span className="likes">{props.likes} Likes</span>
		</>
	)
}

export default ProfileText;