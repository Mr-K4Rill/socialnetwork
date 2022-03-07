import React from 'react';
import './profile.css';

function Post(props) {
	return(
		<div class="post">
			<img src={require("./be-active_640.jpg")} />
			<span>Elon Mask</span>
			<p class="text">{props.message}{props.goodbye}</p>
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