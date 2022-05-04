import React from 'react';
import './sidebar.css';
import {Link} from "react-router-dom";

function Friend(props) {
	return(
		<div className="Friend">
			<img src={require(`${props.img}`)} />
			<span>{props.name}</span>
		</div>
	)
}

export default Friend;