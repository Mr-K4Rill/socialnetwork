import React from 'react';
import './dialogs.css';	
import Message from './message.jsx';
import {Link} from "react-router-dom"
import DialogsItems	from './dialogs_items.jsx'



function Dialogs(props) {
	let addDialog =()=> {
		props.addDialog(NewDialog.current.value);
		NewDialog.current.value = ""
		}
	let NewDialog = React.createRef()
	return(
		<div>
			{props.names.map((e) => <DialogsItems name = {e.name} id = {e.id} text = {e.text} />  )}
			<div className="send">
				<input ref = {NewDialog} placeholder="text" />
				<button onClick = {addDialog}>Send</button>
			</div>
		</div>

	)
}

export default Dialogs;


// let test = [1, 2, 3, 4, 5];
// test = test.map((num) => num * 2)
// console.log(test)