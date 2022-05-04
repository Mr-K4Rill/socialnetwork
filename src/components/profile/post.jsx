import React from 'react';
import './profile.css';
import ProfileInfo from './profile_info'
import ProfileText from './profile_text'

function Post(props) {
	return(
		<div className="post">
			<ProfileInfo />	
			<ProfileText message = {props.message} likes = {props.likes} />		
		</div>
	)
}
	
// let a = {
// 	one: "Привет",
// 	buy: "Пока"
// }
// console.log(a.buy)
// function Name(name) {
// 	console.log(name + "привет")
// }
// Name("Kirill")
export default Post;
