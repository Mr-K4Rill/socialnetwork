import React from 'react';
import './dialogs.css';	
import Message from './message.jsx';
import {Link} from "react-router-dom"
import DialogsItems	from './dialogs_items.jsx'

function Dialogs() {
	return(
		<div>
			{/*<div class="message">
				<Link to="/messages/1">Elon Mask</Link>
				<p>Привет</p>
			</div>
			<div class="message">
				<Link to="/messages/2">Kirill</Link>
				<p>Привет</p>
			</div>
			<div class="message">
				<Link to="/messages/3">Steve</Link>
				<p>Привет</p>
			</div>*/}
			<DialogsItems name = "Elon Mask" id = "1" text = "Привет"/>
			<DialogsItems name = "Kirill" id = "2" text = "Как дела?"/>
			<DialogsItems name = "Steve" id = "3" text = "Пошли погуляем"/>
		</div>

	)
}

export default Dialogs;