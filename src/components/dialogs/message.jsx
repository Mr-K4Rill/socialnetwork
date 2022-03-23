import React from 'react';
import './dialogs.css'

function Message(props) {
	return(
		<div class = "message">
			<span>{props.name}</span>
			<p>{props.text}</p>
		</div>
	)
}

export default Message;