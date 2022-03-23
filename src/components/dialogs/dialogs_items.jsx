import React from 'react';
import './dialogs.css';
import {Link} from "react-router-dom";

function DialogsItems(props) {
	return(
		<div class="message">
			<Link to={`/messages/${props.id}`}>{props.name}</Link>
			<p>{props.text}</p>
		</div>
	);
}

export default DialogsItems;

// let name = "Кирилл"
// console.log("Привет" + " Кирилл")
// console.log(`Привет ${name}`)