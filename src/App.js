import './App.css';
import Header from './components/header/Header.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Profile from './components/profile/Profile.jsx';
import Dialogs from './components/dialogs/Dialogs.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App(props) {
	return (
		<BrowserRouter>
			<div className="wrapper">
				
						<Header />
						<Sidebar guys={props.Data.guys} />
						<div className='wrapper-content'>
							<Routes>
								<Route exact path="/" element={<Profile DataPost={props.Data.DataPost} addPost={props.addPost} NewPostText={props.Data.NewPostText}  name = "Elon Mask" />} />
								<Route exact path="/profile" element={<Profile DataPost={props.Data.DataPost} addPost={props.addPost} name = "Elon Mask" NewPostText={props.Data.NewPostText} />} />
								<Route exact path="/messages" element={<Dialogs names={props.Data.names} addDialog = {props.addDialog} />} />
							</Routes>
						</div>	
			</div>
		</BrowserRouter>
	);
}

export default App;


