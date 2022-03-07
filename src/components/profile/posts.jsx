import React from 'react';
import './profile.css';
import Post from './post.jsx'

function Posts() {
	return(
		<div class="my_posts">
			<h2>My Posts</h2>
			<input placeholder="enter the post" />
			<button>Add post</button>
			<Post message = "Привет" goodbye = "Пока!" />
			<Post />	
		</div>
	)
}

export default Posts;