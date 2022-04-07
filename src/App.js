import './App.css';
import Header from './components/header/Header.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Profile from './components/profile/Profile.jsx';
import Dialogs from './components/dialogs/Dialogs.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App(props) {
	return (
		<BrowserRouter>
			<div class="wrapper">
				
						<Header />
						<Sidebar />
						<div className='wrapper-content'>
							<Routes>
								<Route exact path="/" element={<Profile DataPost={props.DataPost} />} />
								<Route exact path="/profile" element={<Profile DataPost={props.DataPost} />} />
								<Route exact path="/messages" element={<Dialogs names={props.names} />} />
							</Routes>
						</div>	
			</div>
		</BrowserRouter>
	);
}

export default App;


