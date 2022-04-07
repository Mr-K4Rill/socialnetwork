import React from 'react';
import './profile.css';

function ProfileText(props) {
	return(
		<>
		<p class="text">{props.message}</p>
		<span class="likes">{props.likes} Likes</span>
		</>
	)
}

export default ProfileText;