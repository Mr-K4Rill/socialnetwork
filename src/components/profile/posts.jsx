import React from 'react';
import './profile.css';
import Post from './post.jsx'

function Posts(props) {
	return(
		<div class="my_posts">
			<h2>My Posts</h2>
			<input placeholder="enter the post" />
			<button>Add post</button>
			{props.DataPost.map((e) => <Post message = {e.message} id = {e.id} likes = {e.likes} />)}	
		</div>
	)
}

export default Posts;	
											 				
