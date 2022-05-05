import React from 'react';
import './profile.css';
import Post from './post.jsx'

function Posts(props) {
	let postText = React.createRef()
	let addPost =()=> {
		props.addPost(postText.current.value);
		postText.current.value = ""
	}
	return(
		<div className="my_posts">
			<h2>My Posts</h2>
			<input value={props.NewPostText} ref = {postText} placeholder="enter the post" />
			<button onClick = {addPost}>Add post</button>
			{props.DataPost.map((e) => <Post message = {e.message} id = {e.id} likes = {e.likes} />)}	
		</div>
	)
}

export default Posts;
											 				
