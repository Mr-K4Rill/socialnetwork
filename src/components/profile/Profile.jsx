import React from 'react';
import './profile.css';

function Profile() {
	return(
		<div class="profile">
			<div class="about_me">
				<img src={require("./be-active_640.jpg")} />
				<span>Elon Mask</span>
			</div>
			<div class="my_posts">
				<h2>My Posts</h2>
				<input placeholder="enter the post" />
				<button>Add post</button>
				<div class="post">
					<img src={require("./be-active_640.jpg")} />
					<span>Elon Mask</span>
					<p class="text">Some text</p>
				</div>
			</div>
		</div>
	);
}

export default Profile;